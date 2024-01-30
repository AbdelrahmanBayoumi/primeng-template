import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Role } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    AvatarGroupModule,
    AvatarModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule,
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  userForm: FormGroup | undefined;
  formGroup: FormGroup | undefined;
  roles = [Role.ADMIN.toString()];
  constructor() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null),
    });

    // this.userForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   photoURL: new FormControl(''),
    //   displayName: new FormControl('', Validators.required),
    //   role: new FormControl('', Validators.required),
    // });
  }

  onSubmit() {
    // console.log(this.userForm.value);
  }
}
