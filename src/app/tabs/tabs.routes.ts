import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { DetailsPage } from '../details/details.page';

import { Tab2Page } from '../tab2/tab2.page'; 


export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        
        path: 'favorites', 
        component: Tab2Page, 
      },
      
      {
        path: 'tab3',
        loadComponent: () => import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
      {
        path: 'details/:id',
        component: DetailsPage,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];