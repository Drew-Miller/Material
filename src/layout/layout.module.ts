import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { CoreModule } from 'core/core.module';
import { AppFormsModule } from 'forms/forms.module';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    CoreModule,
    AppFormsModule
  ],
  declarations: [
    MainComponent,
    NavComponent,
    HeaderComponent,
    SideNavComponent,
    ThemePickerComponent
  ],
  exports: [
    MainComponent
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ]
})
export class LayoutModule {}
