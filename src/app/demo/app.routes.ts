import { Routes } from '@angular/router';
import { UsersListComponent } from '../users/users-list/users-list.component';
import { EmptyComponent } from './empty/empty.component';
import { TableDemoComponent } from './table/table-demo.component';
import { TodoComponent } from './todo/todo.component';

export const DEMO_ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'users-list',
        component: UsersListComponent,
      },
    ],
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'empty',
    component: EmptyComponent,
  },
  {
    path: 'table',
    component: TableDemoComponent,
  },
];
