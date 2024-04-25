import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';

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
    path: '**',
    pathMatch: 'full',
    redirectTo: '/page-not-found',
  },
];
