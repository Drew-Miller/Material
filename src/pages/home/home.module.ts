import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';

import { HomeRoutingModule } from './home.routing.module';
import { MainComponent } from './main/home.main.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    MainComponent
  ]
})
export class HomeModule { }
