import { Component, Input } from '@angular/core';

import { SalesforceService } from '../../providers/salesforce.service';
import { LoadingController, ToastController, AlertController, ModalController } from '@ionic/angular';
import { SelectAccountsModal } from '../../modals/select-accounts/select-accounts';

@Component({
  selector: 'page-lead-convert',
  templateUrl: 'lead-convert.html'
})
export class LeadConvertPage {
  @Input() lead: any;
  @Input() convertedStages: any[] = [];
  convertedStatus;
  selectedAccount;
  opportunityName = '';

  constructor(
    public salesforceService: SalesforceService,
    public loadingController: LoadingController,
    public alert: AlertController,
    public modalController: ModalController,
    public toastController: ToastController
  ) { }

  async ionViewWillEnter() {
    await this.reload();
  }

  async reload() {
  }

  save() {
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
  }

  async dismiss() {
    await this.modalController.dismiss();
  }
}
