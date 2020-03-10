import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpportunityDetailPage } from './opportunity-detail';

const routes: Routes = [
  {
    path: '',
    component: OpportunityDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityDetailPageRoutingModule { }
