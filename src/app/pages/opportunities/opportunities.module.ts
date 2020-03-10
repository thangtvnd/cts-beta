import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OpportunitiesPage } from './opportunities';
import { OpportunitiesPageRoutingModule } from './opportunities-routing.module';
import { NglModule } from 'ng-lightning';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NglModule,
    OpportunitiesPageRoutingModule
  ],
  declarations: [
    OpportunitiesPage
  ]
})
export class OpportunitiesModule { }
