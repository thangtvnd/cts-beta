import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LeadsPage } from './leads';
import { LeadsPageRoutingModule } from './leads-routing.module';
import { NglModule } from 'ng-lightning';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NglModule,
    LeadsPageRoutingModule
  ],
  declarations: [
    LeadsPage
  ]
})
export class LeadsModule { }
