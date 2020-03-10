import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SalesforceService } from '../../providers/salesforce.service';
import { LoadingController, NavController, ToastController, ModalController, AlertController } from '@ionic/angular';
import { SelectAccountsModal } from '../../modals/select-accounts/select-accounts';

@Component({
  selector: 'page-opportunity-edit',
  styleUrls: ['./opportunity-edit.scss'],
  templateUrl: 'opportunity-edit.html'
})
export class OpportunityEditPage {
  opportunity: any;
  stages: any[];
  defaultHref = '';
  StageSelected: any;
  TypeSelected: any;
  selectedAccount: any;
  firstScrollLeft = -1;
  firstLeft = -1;
  step = 1;
  selectedStage;
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

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.pickListValues = await this.salesforceService.getPickListValues('Opportunity');
    const opportunityId = this.route.snapshot.paramMap.get('opportunityId');
    if (opportunityId == '0') {
      this.opportunity = {};
      this.selectedAccount = null;
      await this.loadingController.dismiss();
      return;
    }
    const opportunityResult = await this.salesforceService.getOpportunity(opportunityId);
    this.opportunity = opportunityResult ? opportunityResult.body : null;
    this.selectedStage = this.opportunity ? this.opportunity.StageName : null;
    this.selectedAccount = this.opportunity ? this.opportunity.Account : null;
    await this.loadingController.dismiss();
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/opportunities`;
  }

  async save() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    let oppToUpdate = {
      Id: this.opportunity.Id,
      Amount: this.opportunity.Amount,
      AccountId: this.opportunity.AccountId,
      Type: this.opportunity.Type,
      Description: this.opportunity.Description,
      NextStep: this.opportunity.NextStep,
      Name: this.opportunity.Name,
      StageName: this.opportunity.StageName,
      CloseDate: this.opportunity.CloseDate,
      Expected_Profit__c: this.opportunity.Expected_Profit__c
    };
    if (oppToUpdate.Id) {
      const result = await this.salesforceService.saveOpportunity(oppToUpdate);
      if (result && result.error) {
        const alert = await this.alert.create({
          header: 'Alert',
          message: 'The opportunity "' + oppToUpdate.Name + '" could not be saved successfully. With error: ' + result.error.body.message,
          buttons: ['OK']
        });
        await this.loadingController.dismiss();
        await alert.present();
        return;
      }
      const toast = await this.toastController.create({
        message: 'The opportunity "' + oppToUpdate.Name + '" have been saved successfully.',
        position: 'top',
        duration: 2000
      });
      toast.present();
    } else {
      const result = await this.salesforceService.newOpportunity(oppToUpdate);
      if (result && result.error) {
        const alert = await this.alert.create({
          header: 'Alert',
          message: 'The opportunity "' + oppToUpdate.Name + '" could not be saved successfully. With error: ' + result.error.body.message,
          buttons: ['OK']
        });
        await this.loadingController.dismiss();
        await alert.present();
        return;
      }
      const toast = await this.toastController.create({
        message: 'A new opportunity "' + oppToUpdate.Name + '" has been created successfully.',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
    }
    window.dispatchEvent(new CustomEvent('opportunities:update-requested'));
    await this.loadingController.dismiss();
    this.navController.back();
  }

  async selectAccount() {
    const modal = await this.modalController.create({
      component: SelectAccountsModal
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    this.selectedAccount = data;
    this.opportunity.AccountId = this.selectedAccount ? this.selectedAccount.Id : null;
  }

  clearAccount() {
    this.selectedAccount = null;
    this.opportunity.AccountId = null;
  }
}
