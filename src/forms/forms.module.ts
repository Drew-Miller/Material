import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';

import {
  OtherFormComponent,
  SnackBarFormComponent,
  UserFormComponent
} from './forms.bundle';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SnackBarFormComponent,
    UserFormComponent,
    OtherFormComponent
  ],
  exports: [
    SnackBarFormComponent,
    UserFormComponent,
    OtherFormComponent
  ]
})
export class AppFormsModule { }
