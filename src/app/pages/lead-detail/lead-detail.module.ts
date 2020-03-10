import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadDetailPage } from './lead-detail';
import { LeadDetailPageRoutingModule } from './lead-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { NglModule } from 'ng-lightning';
import { FormsModule } from '@angular/forms';
import { LeadConvertModule } from '../lead-convert/lead-convert.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NglModule,
    LeadConvertModule,
    LeadDetailPageRoutingModule
  ],
  declarations: [
    LeadDetailPage,
  ]
})
export class LeadDetailModule { }
