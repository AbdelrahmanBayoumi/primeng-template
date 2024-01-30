import { Routes } from '@angular/router';
import { DEMO_ROUTES } from './demo/app.routes';
import { NotFoundComponent } from './demo/not-found/not-found.component';
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
        component: HomeComponent,
      },
      {
        path: 'demo',
        children: DEMO_ROUTES,
      },
    ],
  },
  {
    path: 'notfound',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '/notfound' },
];
