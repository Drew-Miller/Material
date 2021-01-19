import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { CoreModule } from 'core/core.module';
import { AppFormsModule } from 'forms/forms.module';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    CoreModule,
    AppFormsModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    NavComponent
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule {}
