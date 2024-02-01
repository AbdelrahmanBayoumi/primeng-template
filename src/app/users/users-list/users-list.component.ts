import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AddUserComponent } from '../add-user/add-user.component';
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
  providers: [ConfirmationService, MessageService, DialogService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnDestroy {
  users: User[] = USERS;
  selectedUser: User | undefined;
  @ViewChild('filter') filter!: ElementRef;
  ref: DynamicDialogRef | undefined;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogService: DialogService
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

  showDialogToAdd() {
    this.ref = this.dialogService.open(AddUserComponent, {
      header: 'Add User',
      modal: true,
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });

    this.ref.onClose.subscribe((data: any) => {
      let summary_and_detail;
      if (data) {
        console.log('data: ', data);

        this.users = [...this.users, data];
        const buttonType = data?.buttonType;
        summary_and_detail = buttonType
          ? {
              summary: 'No User Added',
            }
          : { summary: 'User Added', detail: `${data?.displayName}` };
      } else {
        summary_and_detail = {
          summary: 'No User Added',
        };
      }
      this.messageService.add({
        severity: 'info',
        ...summary_and_detail,
        life: 3000,
      });
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maximized',
        detail: `maximized: ${value.maximized}`,
      });
    });
  }

  showDialogToEdit() {
    this.ref = this.dialogService.open(AddUserComponent, {
      header: 'Edit User',
      modal: true,
      contentStyle: { overflow: 'auto' },
      data: this.selectedUser,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });

    this.ref.onClose.subscribe((data: any) => {
      let summary_and_detail;
      if (data) {
        console.log('data: ', data);

        this.users = this.users.map((user) =>
          user.uid === data.uid ? data : user
        );
        const buttonType = data?.buttonType;
        summary_and_detail = buttonType
          ? {
              summary: 'No User Edited',
            }
          : { summary: 'User Edited', detail: `${data?.displayName}` };
      } else {
        summary_and_detail = {
          summary: 'No User Edited',
        };
      }
      this.messageService.add({
        severity: 'info',
        ...summary_and_detail,
        life: 3000,
      });
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maximized',
        detail: `maximized: ${value.maximized}`,
      });
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
