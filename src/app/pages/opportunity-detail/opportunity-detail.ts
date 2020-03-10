import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SalesforceService } from '../../providers/salesforce.service';
import { LoadingController, NavController, ToastController, AlertController, ModalController } from '@ionic/angular';
import { SelectClosedStageModal } from '../../modals/select-closed-stage/select-closed-stage';

@Component({
  selector: 'page-opportunity-detail',
  styleUrls: ['./opportunity-detail.scss'],
  templateUrl: 'opportunity-detail.html'
})
export class OpportunityDetailPage {
  opportunity: any;
  opportunityId: any;
  stages: any[];
  defaultHref = '';
  firstLeft = -1;
  firstScrollLeft = -1;
  step = 1;
  selectedStage;

  constructor(
    public navController: NavController,
    public modalController: ModalController,
    public salesforceService: SalesforceService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public toastController: ToastController,
    public alert: AlertController,
  ) { }

  async ionViewWillEnter() {
    this.opportunityId = this.route.snapshot.paramMap.get('opportunityId');
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    await this.reload();
    await this.loadingController.dismiss();
    this.listenChanges();
  }

  async reload() {
    const opportunityResponse = await this.salesforceService.getOpportunity(this.opportunityId);
    this.opportunity = opportunityResponse ? opportunityResponse.body : null;
    this.selectedStage = this.opportunity ? this.opportunity.StageName : null;
    let stagesResponse = await this.salesforceService.getOpportunityStages();
    const tempStages = stagesResponse && stagesResponse.body ? stagesResponse.body : [];
    const stageId = tempStages.findIndex(t => t['ApiName'] == this.opportunity['StageName']);
    let buildStages = [];
    for (let id = 0; id < tempStages.length; id++) {
      if (tempStages[id]['IsClosed']) {
        continue;
      }
      if (
        tempStages[id].ApiName == 'Submit for Approval'
        || tempStages[id].ApiName == 'In Approval'
        || tempStages[id].ApiName == 'Approved'
        || tempStages[id].ApiName == 'Rejected'
      ) {
        continue;
      }
      let status = 'slds-is-incomplete'
      if (id < stageId) {
        status = 'slds-is-complete'
      } else if (id == stageId) {
        status = 'slds-is-current'
      }
      status = 'slds-path__item ' + status;
      buildStages.push({
        status: status,
        value: tempStages[id]['ApiName']
      })
    }
    if (!(this.selectedStage == 'Closed Won' || this.selectedStage == 'Closed Lost')) {
      buildStages.push({
        status: 
          this.selectedStage == 'Submit for Approval'
          || this.selectedStage == 'In Approval'
          || this.selectedStage == 'Approved'
          || this.selectedStage == 'Rejected'
          ? 'slds-path__item slds-is-complete'
          : 'slds-path__item slds-is-incomplete'
        ,
        value: this.selectedStage == 'Submit for Approval'
          || this.selectedStage == 'In Approval'
          || this.selectedStage == 'Approved'
          || this.selectedStage == 'Rejected'
          ? this.selectedStage
          : 'Submit for Approval'
        ,
        object: null
      });
    }
    buildStages.push({
      status: this.selectedStage == 'Closed Won' || this.selectedStage == 'Closed Lost'
        ? 'slds-path__item slds-is-complete'
        : 'slds-path__item slds-is-incomplete'
      ,
      value: this.selectedStage == 'Closed Won' || this.selectedStage == 'Closed Lost'
        ? this.selectedStage
        : 'Closed'
      ,
      object: null
    });
    this.stages = buildStages;
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

  listenChanges() {
    window.addEventListener('opportunities:update-requested', async () => {
      await this.reload();
    });
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/opportunities`;
  }

  edit() {
    this.navController.navigateForward('/app/tabs/opportunities/edit/' + this.opportunity.Id);
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  stagesScrollLeft() {
    const myStagesElement = document.getElementById('myStages');
    myStagesElement.scroll({
      top: myStagesElement.scrollTop,
      left: myStagesElement.scrollLeft - 150,
      behavior: 'smooth'
    });
  }

  stagesScrollRight() {
    const myStagesElement = document.getElementById('myStages');
    myStagesElement.scroll({
      top: myStagesElement.scrollTop,
      left: myStagesElement.scrollLeft + 150,
      behavior: 'smooth'
    });
  }

  async remove() {
    if (confirm('Are you sure to delete this opportunity?')) {
      await this.salesforceService.deleleteOpportunity(this.opportunity);
      window.dispatchEvent(new CustomEvent('opportunity:deleted'));
      this.navController.pop();
    }
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
    const myStagesElement = document.getElementById('myStages');
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
    const myStagesElement = document.getElementById('myStages');
    myStagesElement.scrollLeft = this.firstScrollLeft + x;
  }

  async markAsCurrentStage() {
    if (!this.opportunity.Id) {
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    let oppToUpdate = {
      Id: this.opportunity.Id,
      StageName: this.selectedStage
    };
    const result = await this.salesforceService.saveOpportunity(oppToUpdate);
    if (result && result.error) {
      const alert = await this.alert.create({
        header: 'Alert',
        message: 'The opportunity "' + this.opportunity.Name + '" could not be saved successfully. With error: ' + result.error.body.message,
        buttons: ['OK']
      });
      await loading.dismiss();
      await alert.present();
      return;
    }
    const toast = await this.toastController.create({
      message: 'The opportunity "' + this.opportunity.Name + '" have been saved successfully.',
      position: 'top',
      duration: 2000
    });
    await loading.dismiss();
    await toast.present();
    window.dispatchEvent(new CustomEvent('opportunities:update-requested'));
    await this.reload();
  }

  async markStageAsComplete() {
    if (!this.opportunity.Id) {
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    //get next stage
    let nextStage = null;
    for (let i = 1; i < this.stages.length; i++) {
      let stage = this.stages[i];
      let previousStage = this.stages[i-1];
      if (previousStage.value == this.opportunity['StageName']) {
        nextStage = stage;
        break;
      }
    }
    if (nextStage == null) {
      console.log("no next stage for ", this.opportunity);
      await loading.dismiss();
      return;
    }
    if (nextStage == 'Closed') {
      await loading.dismiss();
      await this.selectClosedStage();
      return;
    }
    console.log("update next stage for ", this.opportunity, " to ", nextStage);
    let oppToUpdate = {
      Id: this.opportunity.Id,
      StageName: nextStage.value
    };
    const result = await this.salesforceService.saveOpportunity(oppToUpdate);
    if (result && result.error) {
      const alert = await this.alert.create({
        header: 'Alert',
        message: 'The opportunity "' + this.opportunity.Name + '" could not be saved successfully. With error: ' + result.error.body.message,
        buttons: ['OK']
      });
      await loading.dismiss();
      await alert.present();
      return;
    }
    const toast = await this.toastController.create({
      message: 'The opportunity "' + this.opportunity.Name + '" have been saved successfully.',
      position: 'top',
      duration: 2000
    });
    await loading.dismiss();
    await toast.present();
    window.dispatchEvent(new CustomEvent('opportunities:update-requested'));
    await this.reload();
  }

  async selectClosedStage() {
    const modal = await this.modalController.create({
      component: SelectClosedStageModal,
      componentProps: {
        opportunity: this.opportunity
      }
    });
    await modal.present();
  }

  async changeClosedStage() {
    await this.selectClosedStage();
  }
}
