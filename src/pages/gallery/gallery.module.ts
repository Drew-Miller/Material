import { NgModule } from '@angular/core';

import { GalleryRoutingModule } from './gallery.routing.module';
import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';

import { GalleryMainComponent } from './main/gallery.main.component';
import { BadgeGalleryComponent } from './badge-gallery/badge-gallery.component';
import { ButtonGalleryComponent } from './button-gallery/button-gallery.component';
import { ListGalleryComponent } from './list-gallery/list-gallery.component';

@NgModule({
  imports: [
    GalleryRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    GalleryMainComponent,
    BadgeGalleryComponent,
    ButtonGalleryComponent,
    ListGalleryComponent
  ]
})
export class GalleryModule {}
