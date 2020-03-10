import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityDetailPage } from './opportunity-detail';
import { OpportunityDetailPageRoutingModule } from './opportunity-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { NglModule } from 'ng-lightning';
import { FormsModule } from '@angular/forms';
import { SelectClosedStageModule } from '../../modals/select-closed-stage/select-closed-stage.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NglModule,
    SelectClosedStageModule,
    OpportunityDetailPageRoutingModule
  ],
  declarations: [
    OpportunityDetailPage,
  ]
})
export class OpportunityDetailModule { }
