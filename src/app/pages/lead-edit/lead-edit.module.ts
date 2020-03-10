import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadEditPage } from './lead-edit';
import { LeadEditPageRoutingModule } from './lead-edit-routing.module';
import { IonicModule } from '@ionic/angular';
import { NglModule } from 'ng-lightning';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NglModule,
    LeadEditPageRoutingModule
  ],
  declarations: [
    LeadEditPage,
  ]
})
export class LeadEditModule { }
