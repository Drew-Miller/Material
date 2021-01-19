import {NgModule} from '@angular/core';

// Angular Modules
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    FormsModule,
    RouterModule,
    CommonModule,
  ]
})
export class SharedModule {}
