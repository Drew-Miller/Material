import {NgModule} from '@angular/core';

import {TabRoutingModule} from './tab.routing.module';
import {MaterialModule} from 'core/material.module';
import {SharedModule} from 'core/shared.module';

import {MainComponent} from './main/tab.main.component';

@NgModule({
  imports: [
    TabRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    MainComponent
  ]
})
export class TabModule {}
