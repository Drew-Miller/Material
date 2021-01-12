import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';

import { TelephoneInputComponent } from './telephone/telephone.input.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    TelephoneInputComponent
  ],
  exports: [
    TelephoneInputComponent
  ]
})
export class InputsModule { }
