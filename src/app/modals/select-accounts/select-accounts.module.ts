import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SelectAccountsModal } from './select-accounts';
import { NglModule } from 'ng-lightning';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NglModule
  ],
  entryComponents: [SelectAccountsModal],
  declarations: [
    SelectAccountsModal
  ]
})
export class SelectAccountsModule { }
