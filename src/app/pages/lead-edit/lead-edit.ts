import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SalesforceService } from '../../providers/salesforce.service';
import { LoadingController, NavController, ToastController, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'page-lead-edit',
  styleUrls: ['./lead-edit.scss'],
  templateUrl: 'lead-edit.html'
})
export class LeadEditPage {
  lead: any;
  stages: any[];
  defaultHref = '';
  StageSelected: any;
  TypeSelected: any;
  firstScrollLeft = -1;
  firstLeft = -1;
  step = 1;
  pickListValues = {};

  constructor(
    public salesforceService: SalesforceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public alert: AlertController,
    public navController: NavController,
    private route: ActivatedRoute,
    public toastController: ToastController
  ) {
    this.StageSelected = {};
    this.TypeSelected = {};
  }

  updateStageSelected() {
    for (let stage of this.stages) {
      this.StageSelected[stage.value] = this.lead.Status == stage.value ? 'selected' : '';
    }
  }

  async ionViewWillEnter() {
    const leadId = this.route.snapshot.paramMap.get('leadId');
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.pickListValues = await this.salesforceService.getPickListValues('Lead');
    let tempStages = this.pickListValues ? this.pickListValues['Status'] : [];
    if (leadId == '0') {
      const stageId = 0;
      let buildStages = [];
      for (let id = 0; id < tempStages.length; id++) {
        let status = 'slds-is-incomplete'
        if (id < stageId) {
          status = 'slds-is-complete'
        } else if (id == stageId) {
          status = 'slds-is-current'
        }
        status = 'slds-path__item ' + status;
        buildStages.push({
          status: status,
          value: tempStages[id]['value'],
          object: tempStages[id]
        })
      }
      this.stages = buildStages;
      this.lead = { Status: tempStages[0]['value'] };
      await this.loadingController.dismiss();
      return;
    }
    const leadResult = await this.salesforceService.getLead(leadId);
    this.lead = leadResult ? leadResult.body : null;
    const stageId = tempStages.findIndex(t => t['value'] == this.lead['Status']);
    let buildStages = [];
    for (let id = 0; id < tempStages.length; id++) {
      let status = 'slds-is-incomplete'
      if (id < stageId) {
        status = 'slds-is-complete'
      } else if (id == stageId) {
        status = 'slds-is-current'
      }
      status = 'slds-path__item ' + status;
      buildStages.push({
        status: status,
        value: tempStages[id]['value'],
        object: tempStages[id]
      })
    }
    this.stages = buildStages;
    this.updateStageSelected();
    await this.loadingController.dismiss();
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/leads`;
  }

  stagesScrollLeft() {
    const myStagesElement = document.getElementById('myStagesEdit');
    myStagesElement.scroll({
      top: myStagesElement.scrollTop,
      left: myStagesElement.scrollLeft - 150,
      behavior: 'smooth'
    });
  }

  stagesScrollRight() {
    const myStagesElement = document.getElementById('myStagesEdit');
    myStagesElement.scroll({
      top: myStagesElement.scrollTop,
      left: myStagesElement.scrollLeft + 150,
      behavior: 'smooth'
    });
  }

  changeStage(stage) {
    const stageId = this.stages.findIndex(t => t['value'] == stage['value']);
    for (let id = 0; id < this.stages.length; id++) {
      let status = 'slds-is-incomplete'
      if (id < stageId) {
        status = 'slds-is-complete'
      } else if (id == stageId) {
        status = 'slds-is-current'
      }
      status = 'slds-path__item ' + status;
      this.stages[id]['status'] = status;
    }
    this.lead.Status = stage['value'];
  }

  async save() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    if (this.lead.Id) {
      const result = await this.salesforceService.saveLead(this.lead);
      if (result && result.error) {
        const alert = await this.alert.create({
          header: 'Alert',
          message: 'The lead "' + this.lead.Name + '" could not be saved successfully. With error: ' + result.error.body.message,
          buttons: ['OK']
        });
        await this.loadingController.dismiss();
        await alert.present();
        return;
      }
      const toast = await this.toastController.create({
        message: 'The lead "' + this.lead.Name + '" have been saved successfully.',
        position: 'top',
        duration: 2000
      });
      toast.present();
    } else {
      const result = await this.salesforceService.newLead(this.lead);
      if (result && result.error) {
        const alert = await this.alert.create({
          header: 'Alert',
          message: 'The lead "' + this.lead.Name + '" could not be saved successfully. With error: ' + result.error.body.message,
          buttons: ['OK']
        });
        await this.loadingController.dismiss();
        await alert.present();
        return;
      }
      const toast = await this.toastController.create({
        message: 'A new lead "' + this.lead.Name + '" has been created successfully.',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
    }
    window.dispatchEvent(new CustomEvent('leads:update-requested'));
    await this.loadingController.dismiss();
    this.navController.back();
  }

  startDrag($event) {
    let touches = $event.touches;
    if (touches.length > 1) {
      return;
    }
    let touch = touches[0];
    if (!touch) {
      return;
    }
    const myStagesElement = document.getElementById('myLeadStagesEdit');
    this.firstLeft = touch.clientX;
    this.firstScrollLeft = myStagesElement.scrollLeft
  }

  drag($event) {
    let touches = $event.touches;
    if (touches.length > 1) {
      return;
    }
    let touch = touches[0];
    if (!touch) {
      return;
    }
    if (this.firstLeft == -1) {
      return;
    }
    let x = this.step * (this.firstLeft - touch.clientX);
    this.stagesScroll(x);
  }

  stopDrag($event) {
    let touches = $event.touches;
    if (touches.length > 1) {
      return;
    }
    let touch = touches[0];
    if (!touch) {
      return;
    }
    this.firstLeft = -1;
  }

  stagesScroll(x) {
    const myStagesElement = document.getElementById('myLeadStagesEdit');
    myStagesElement.scrollLeft = this.firstScrollLeft + x;
  }
}
