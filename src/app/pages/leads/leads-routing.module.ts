import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeadsPage } from './leads';

const routes: Routes = [
  {
    path: '',
    component: LeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsPageRoutingModule { }
