import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';

// Shared Components

// Shared Services
import {ApplicationService} from './services.bundle';

@NgModule({
  imports : [
    SharedModule,
    MaterialModule
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [
    ApplicationService
  ]
})
export class CoreModule { }
