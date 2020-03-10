import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SalesforceService } from '../../providers/salesforce.service';
import { LoadingController, NavController, ToastController, AlertController, ModalController } from '@ionic/angular';
import { LeadConvertPage } from '../lead-convert/lead-convert';

@Component({
  selector: 'page-lead-detail',
  styleUrls: ['./lead-detail.scss'],
  templateUrl: 'lead-detail.html'
})
export class LeadDetailPage {
  lead: any;
  stages: any[];
  defaultHref = '';
  firstLeft = -1;
  firstScrollLeft = -1;
  step = 1;
  selectedStage;
  convertedStages = [{label: 'Qualified', value: 'Qualified'}];

  constructor(
    public navController: NavController,
    public modalController: ModalController,
    public salesforceService: SalesforceService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public alert: AlertController,
    public toastController: ToastController
  ) { }

  async ionViewWillEnter() {
    await this.reload();
  }

  async reload() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    const leadId = this.route.snapshot.paramMap.get('leadId');
    const leadResponse = await this.salesforceService.getLead(leadId);
    this.lead = leadResponse ? leadResponse.body : null;
    this.selectedStage = this.lead ? this.lead.Status : null;
    const tempStagesResult = await this.salesforceService.getDescriptions('Lead');
    const tempStagesField = tempStagesResult 
        && tempStagesResult.body 
        && tempStagesResult.body.fields
        ? tempStagesResult.body.fields.find(f => f.name == 'Status')
        : null;
    console.log(tempStagesField);
    const tempStages = tempStagesField ? tempStagesField.picklistValues : null;
    const stageId = tempStages.findIndex(t => t['value'] == this.lead['Status']);
    let buildStages = [];
    for(let id = 0; id < tempStages.length; id++) {
      let status = 'slds-is-incomplete'
      if (id < stageId) {
        status = 'slds-is-complete'
      } else if (id == stageId) {
        status = 'slds-is-current'
      }
      status = 'slds-path__item ' + status;
      buildStages.push({
        status: status,
        value: tempStages[id]['value']
      })
    }
    this.stages = buildStages;
    await this.loadingController.dismiss();
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/leads`;
  }

  edit() {
    this.navController.navigateForward('/app/tabs/leads/edit/' + this.lead.Id);
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  stagesScrollLeft() {
    const myStagesElement = document.getElementById('myLeadStages');
    myStagesElement.scroll({
      top: myStagesElement.scrollTop,
      left: myStagesElement.scrollLeft - 150,
      behavior: 'smooth'
    });
  }

  stagesScrollRight() {
    const myStagesElement = document.getElementById('myLeadStages');
    myStagesElement.scroll({
      top: myStagesElement.scrollTop,
      left: myStagesElement.scrollLeft + 150,
      behavior: 'smooth'
    });
  }

  changeStage(stage) {
    for (let id = 0; id < this.stages.length; id++) {
      let status = this.stages[id]['status'];
      status = status.replace(' slds-is-active', '');
      this.stages[id]['status'] = status;
    }
    const stageId = this.stages.findIndex(t => t['value'] == stage['value']);
    for (let id = 0; id < this.stages.length; id++) {
      if (id == stageId) {
        const status = this.stages[id]['status'] + ' slds-is-active'
        this.stages[id]['status'] = status;
      }
    }
    this.selectedStage = stage['value'];
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
    const myStagesElement = document.getElementById('myLeadStages');
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
    const myStagesElement = document.getElementById('myLeadStages');
    myStagesElement.scrollLeft = this.firstScrollLeft + x;
  }
  
  async markAsCurrentStage() {
    if (!this.lead.Id) {
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    let leadToUpdate = {
      Id: this.lead.Id,
      Status: this.selectedStage
    };
    const result = await this.salesforceService.saveLead(leadToUpdate);
    if (result && result.error) {
      const alert = await this.alert.create({
        header: 'Alert',
        message: 'The lead "' + this.lead.Name + '" could not be saved successfully. With error: ' + result.error.body.message,
        buttons: ['OK']
      });
      await loading.dismiss();
      await alert.present();
      return;
    }
    const toast = await this.toastController.create({
      message: 'The lead "' + this.lead.Name + '" have been saved successfully.',
      position: 'top',
      duration: 2000
    });
    await loading.dismiss();
    await toast.present();
    window.dispatchEvent(new CustomEvent('leads:update-requested'));
    await this.reload();
  }

  markStageAsComplete() {
    if (!this.lead.Id) {
      return;
    }
  }

  async remove() {
    if (confirm('Are you sure to delete this lead?')) {
      await this.salesforceService.deleleteLead(this.lead);
      window.dispatchEvent(new CustomEvent('lead:deleted'));
      this.navController.pop();
    }
  }

  async selectConvertedStatus() {
    const modal = await this.modalController.create({
      component: LeadConvertPage,
      componentProps: {
        'lead': this.lead,
        'convertedStages': this.convertedStages
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
  }
}
