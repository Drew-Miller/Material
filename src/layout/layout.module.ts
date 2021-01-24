import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { CoreModule } from 'core/core.module';
import { AppFormsModule } from 'forms/forms.module';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

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
    SideNavComponent
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule {}
