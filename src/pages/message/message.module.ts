import {NgModule} from '@angular/core';

import {MessageRoutingModule} from './message.routing.module';
import {MaterialModule} from 'core/material.module';
import {SharedModule} from 'core/shared.module';
import {AppFormsModule} from 'forms/forms.module';

import {MainComponent} from './main/message.main.component';

@NgModule({
  imports: [
    MessageRoutingModule,
    MaterialModule,
    SharedModule,
    AppFormsModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [],
})
export class MessageModule { }
