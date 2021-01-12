import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { NgFormsModule } from 'core/ng.forms.module';

import { TelephoneInputComponent } from './telephone/telephone.input.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    NgFormsModule
  ],
  declarations: [
    TelephoneInputComponent
  ],
  exports: [
    TelephoneInputComponent
  ]
})
export class InputsModule { }
