import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController, Config, NavController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { SalesforceService } from '../../providers/salesforce.service';

@Component({
  selector: 'page-opportunities',
  templateUrl: 'opportunities.html',
  styleUrls: ['./opportunities.scss'],
})
export class OpportunitiesPage implements OnInit, OnDestroy {
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  opportunities: any[] = [];
  active: any;
  loading = true;
  
  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public navController: NavController,
    public user: UserData,
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
    const data = await this.salesforceService.getOpportunities();
    if (!data || !data.body || !data.body.results) {
      await loading.dismiss();
      this.loading = false;
      return;
    }
    this.opportunities = data.body.results;
    await loading.dismiss();
    this.ios = this.config.get('mode') === 'ios';
    this.loading = false;
  }
  
  listenEvents() {
    console.log('listenEvents');
    window.addEventListener('user:login', this.reloadHandle);
    window.addEventListener('opportunities:update-requested', this.reloadHandle);
    window.addEventListener('opportunities:deleted', this.reloadHandle);
  }

  unListenEvents() {
    console.log('unListenEvents');
    window.removeEventListener('user:login', this.reloadHandle);
    window.removeEventListener('leads:update-requested', this.reloadHandle);
    window.removeEventListener('leads:deleted', this.reloadHandle);
  }

  reloadHandle = async () => {
    console.log('reload opps by reloadHandle');
    await this.reload();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.unListenEvents();
  }

  add() {
    this.navController.navigateForward('/app/tabs/opportunities/edit/0');
  }
}
