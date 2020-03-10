import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public loadingCtrl: LoadingController
  ) { }

  async onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      await loading.present();
      const ret = await this.userData.login(this.login.username, this.login.password);
      if (!ret) {
        await loading.dismiss();
        return;
      }
      this.router.navigateByUrl('/app/tabs/opportunities');
      await loading.dismiss();
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  async onLoginOffice365() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await loading.present();
    const ret = await this.userData.azureAdLogin();
    if (!ret) {
      await loading.dismiss();
      return;
    }
    this.router.navigateByUrl('/app/tabs/opportunities');
    await loading.dismiss();
  }
}
