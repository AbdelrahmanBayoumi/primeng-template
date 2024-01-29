import { Routes } from '@angular/router';
import { EmptyComponent } from './demo/empty/empty.component';
import { NotFoundComponent } from './demo/not-found/not-found.component';
import { TodoComponent } from './demo/todo/todo.component';
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
        path: 'todo',
        component: TodoComponent,
      },
      {
        path: 'empty',
        component: EmptyComponent,
      },
    ],
  },
  {
    path: 'notfound',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '/notfound' },
];
