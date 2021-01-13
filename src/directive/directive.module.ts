import { NgModule } from '@angular/core';

import { SharedModule } from 'core/shared.module';
import { NgFormsModule } from 'core/ng.forms.module';

import { TelephoneDirective } from './telephone/telephone.directive';

@NgModule({
  imports: [
    SharedModule,
    NgFormsModule
  ],
  declarations: [
    TelephoneDirective
  ],
  exports: [
    TelephoneDirective
  ]
})
export class DirectiveModule { }
