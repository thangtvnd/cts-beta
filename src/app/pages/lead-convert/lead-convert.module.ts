import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadConvertPage } from './lead-convert';
import { IonicModule } from '@ionic/angular';
import { NglModule } from 'ng-lightning';
import { FormsModule } from '@angular/forms';
import { SelectAccountsModule } from '../../modals/select-accounts/select-accounts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NglModule,
    SelectAccountsModule
  ],
  entryComponents: [LeadConvertPage],
  declarations: [
    LeadConvertPage,
  ]
})
export class LeadConvertModule { }
