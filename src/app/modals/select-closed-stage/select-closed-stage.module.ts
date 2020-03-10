import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SelectClosedStageModal } from './select-closed-stage';
import { NglModule } from 'ng-lightning';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NglModule
  ],
  entryComponents: [SelectClosedStageModal],
  declarations: [
    SelectClosedStageModal
  ]
})
export class SelectClosedStageModule { }
