import { NgModule } from '@angular/core';

import { MessageRoutingModule } from './message.routing.module';
import { AppFormsModule } from 'forms/forms.module';

import { MainComponent } from './main/message.main.component';

@NgModule({
  imports: [
    MessageRoutingModule,
    AppFormsModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [],
})
export class MessageModule { }
