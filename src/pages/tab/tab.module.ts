import { NgModule } from '@angular/core';

import { TabRoutingModule } from './tab.routing.module';
import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';

import { MainComponent } from './main/tab.main.component';
import { ButtonGalleryComponent } from './button-gallery/button-gallery.component';

@NgModule({
  imports: [
    TabRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    ButtonGalleryComponent
  ]
})
export class TabModule {}
