import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app.layout.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];
