import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import {
  DialogService,
  DynamicDialogComponent,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Role, User } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    AvatarGroupModule,
    AvatarModule,
    InputTextModule,
    ConfirmDialogModule,
    FileUploadModule,
    ToastModule,
    DropdownModule,
  ],
  providers: [DialogService],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!: FileUpload;
  @ViewChild('userForm') userForm!: FormGroup;
  user!: User;
  selectedFile: File | undefined;
  roles = [Role.ADMIN, Role.EDITOR, Role.USER];
  maxImageSize = 5 * 1024 * 1024; // 5MB
  instance: DynamicDialogComponent | undefined;

  constructor(
    public config: DynamicDialogConfig,
    private ref: DynamicDialogRef
  ) {
    console.log('AddUserComponent: constructor');
    console.log(this.ref);
  }

  ngOnInit(): void {
    if (this.config.data) {
      this.user = { ...this.config.data };
    }
    if (!this.user) {
      this.user = {
        uid: '',
        email: '',
        photoURL: '',
        displayName: '',
        role: Role.EDITOR,
      };
    }
  }

  onSubmit(formData: any) {
    console.log('onSubmit: ', formData, this.selectedFile);
    this.closeDialog(this.userForm.value);
  }

  onFileRemove(event: any) {
    console.log('onFileRemove: ', event);
    this.selectedFile = undefined;
  }

  onFileSelect(event: any) {
    console.log('onFileSelect: ', event);
    if (event.files && event.files.length > 0) {
      this.selectedFile = event.files[0];
    }
  }

  closeDialog(data: User | undefined) {
    this.ref.close(data);
  }

  resetForm() {
    this.userForm.reset();
    this.fileUpload.clear();
    this.selectedFile = undefined;
    this.closeDialog(undefined);
  }
}
