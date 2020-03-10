import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpportunitiesPage } from './opportunities';

const routes: Routes = [
  {
    path: '',
    component: OpportunitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunitiesPageRoutingModule { }
