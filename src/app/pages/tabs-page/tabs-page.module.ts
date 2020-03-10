import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { OpportunityDetailModule } from '../opportunity-detail/opportunity-detail.module';
import { OpportunitiesModule } from '../opportunities/opportunities.module';
import { LeadsModule } from '../leads/leads.module';
import { LeadDetailModule } from '../lead-detail/lead-detail.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    OpportunitiesModule,
    LeadsModule,
    OpportunityDetailModule,
    LeadDetailModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
