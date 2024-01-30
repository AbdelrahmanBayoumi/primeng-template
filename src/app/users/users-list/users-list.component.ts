import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { User } from '../models/user.model';
import { USERS } from '../models/users.dummy';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    AvatarGroupModule,
    AvatarModule,
    InputTextModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  users: User[] = USERS;
  @ViewChild('filter') filter!: ElementRef;

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
