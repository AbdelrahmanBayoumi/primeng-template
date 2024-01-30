import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { User } from '../models/user.model';
import { USERS } from '../models/users.dummy';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    AvatarGroupModule,
    AvatarModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  users: User[] = USERS;
  selectedUser: User | undefined;
  @ViewChild('filter') filter!: ElementRef;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
    this.selectedUser = undefined;
  }

  deleteUser() {
    this.confirmationService.confirm({
      header: 'Delete User?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.users = this.users.filter(
          (val) => val.uid !== this.selectedUser?.uid
        );
        this.selectedUser = undefined;
        this.messageService.add({
          severity: 'info',
          summary: 'Deleted',
          detail: 'The user has been deleted.',
          life: 3000,
        });
      },
    });
  }
}
