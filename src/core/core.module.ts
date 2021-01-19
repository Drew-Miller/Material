import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';

// Shared Components
import { SearchComponent } from './components.bundle';

// Shared Services
import { ApplicationService, LoremIpsomService } from './services.bundle';

@NgModule({
  imports : [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  providers: [
    ApplicationService,
    LoremIpsomService
  ]
})
export class CoreModule { }
