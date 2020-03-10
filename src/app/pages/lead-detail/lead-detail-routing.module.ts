import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeadDetailPage } from './lead-detail';

const routes: Routes = [
  {
    path: '',
    component: LeadDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadDetailPageRoutingModule { }
