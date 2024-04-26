import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { RouteparamsComponent } from './components/routeparams/routeparams.component';
import { ChildroutesComponent } from './components/childroutes/childroutes.component';

export const routes: Routes = [
  {
    path: 'search',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/search',
  },
  {
    path: 'page-not-found',
    component: PagenotfoundComponent,
  },
  {
    path: 'user/:username',
    component: RouteparamsComponent,
    children: [
      {
        path: 'contact',
        component: ChildroutesComponent,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/page-not-found',
  },
];
