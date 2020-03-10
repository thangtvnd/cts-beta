import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, Config } from '@ionic/angular';

import { SalesforceService } from '../../providers/salesforce.service';

@Component({
  selector: 'page-select-accounts',
  templateUrl: 'select-accounts.html',
  styleUrls: ['./select-accounts.scss'],
})
export class SelectAccountsModal implements OnInit {
  // Gets a reference to the list element
  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  groups: any = [];
  accounts: any[] = [];
  active: any;
  loading = true;
  
  constructor(
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public salesforceService: SalesforceService,
    public config: Config
    
  ) { }

  async ngOnInit() {
    await this.reload();
    this.listenEvents();
  }

  async reload() {
    this.loading = true;
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await loading.present();
    const data = await this.salesforceService.getAccounts();
    if (!data || !data.body || !data.body.records) {
      await loading.dismiss();
      this.loading = false;
      return;
    }
    this.accounts = data.body.records;
    await loading.dismiss();
    this.ios = this.config.get('mode') === 'ios';
    this.loading = false;
  }

  listenEvents() {
    window.addEventListener('user:login', async () => {
      await this.reload();
    });
    window.addEventListener('accounts:update-requested', async () => {
      await this.reload();
    });
    window.addEventListener('account:deleted', async () => {
      await this.reload();
    });
  }

  select(account) {
    this.modalCtrl.dismiss(account);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
