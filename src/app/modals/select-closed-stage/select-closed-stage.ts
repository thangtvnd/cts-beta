import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController, Config, ToastController, AlertController } from '@ionic/angular';

import { SalesforceService } from '../../providers/salesforce.service';

@Component({
  selector: 'page-select-closed-stage',
  templateUrl: 'select-closed-stage.html',
})
export class SelectClosedStageModal {
  // Gets a reference to the list element
  @Input() opportunity: any;
  selectedStage = '';
  
  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alert: AlertController,
    public modalCtrl: ModalController,
    public salesforceService: SalesforceService,
    public config: Config
    
  ) { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async closeOpportunity() {
    // close opportunity
    if (!this.selectedStage) {
      const alert = await this.alert.create({
        header: 'Alert',
        message: 'Please select a closed stage.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    console.log(this.selectedStage);
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
    await this.modalCtrl.dismiss();
  }
}
