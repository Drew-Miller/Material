import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';

import { HomeRoutingModule } from './home.routing.module';
import { MainComponent } from './main/home.main.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [
    MainComponent
  ]
})
export class HomeModule { }
