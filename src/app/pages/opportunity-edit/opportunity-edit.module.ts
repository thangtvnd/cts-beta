import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityEditPage } from './opportunity-edit';
import { OpportunityEditPageRoutingModule } from './opportunity-edit-routing.module';
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
    SelectAccountsModule,
    OpportunityEditPageRoutingModule
  ],
  declarations: [
    OpportunityEditPage,
  ]
})
export class OpportunityEditModule { }
