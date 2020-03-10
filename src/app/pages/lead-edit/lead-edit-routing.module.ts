import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeadEditPage } from './lead-edit';

const routes: Routes = [
  {
    path: '',
    component: LeadEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadEditPageRoutingModule { }
