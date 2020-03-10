import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpportunityEditPage } from './opportunity-edit';

const routes: Routes = [
  {
    path: '',
    component: OpportunityEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityEditPageRoutingModule { }
