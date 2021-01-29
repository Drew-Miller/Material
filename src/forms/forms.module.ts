import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { NgFormsModule } from 'core/ng.forms.module';
import { DirectivesModule } from 'directives/directives.module';

import {
  SnackBarFormComponent,
  UserFormComponent,
  StyleFormComponent,
  NonTextFormComponent,
  DateFormComponent,
  TelephoneFormComponent
} from './forms.bundle';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    NgFormsModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SnackBarFormComponent,
    UserFormComponent,
    StyleFormComponent,
    NonTextFormComponent,
    DateFormComponent,
    TelephoneFormComponent
  ],
  exports: [
    SnackBarFormComponent,
    UserFormComponent,
    StyleFormComponent,
    NonTextFormComponent,
    DateFormComponent,
    TelephoneFormComponent
  ]
})
export class AppFormsModule { }
