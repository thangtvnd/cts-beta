import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { OpportunitiesPage } from '../opportunities/opportunities';
import { LeadsPage } from '../leads/leads';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'leads',
        children: [
          {
            path: '',
            component: LeadsPage,
          },
          {
            path: 'lead/:leadId',
            loadChildren: () => import('../lead-detail/lead-detail.module').then(m => m.LeadDetailModule)
          },
          {
            path: 'edit/:leadId',
            loadChildren: () => import('../lead-edit/lead-edit.module').then(m => m.LeadEditModule)
          }
        ]
      },
      {
        path: 'opportunities',
        children: [
          {
            path: '',
            component: OpportunitiesPage,
          },
          {
            path: 'opportunity/:opportunityId',
            loadChildren: () => import('../opportunity-detail/opportunity-detail.module').then(m => m.OpportunityDetailModule)
          },
          {
            path: 'edit/:opportunityId',
            loadChildren: () => import('../opportunity-edit/opportunity-edit.module').then(m => m.OpportunityEditModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/opportunities',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

