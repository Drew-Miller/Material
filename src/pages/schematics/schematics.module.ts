import { NgModule } from '@angular/core';

import { SharedModule } from 'core/shared.module';
import { MaterialModule } from 'core/material.module';
import { NgFormsModule } from 'core/ng.forms.module';

import { ShcematicsRoutingModule } from './schematics.routing.module';

import { MainComponent } from './main/schematics.main.component';
import { MyAddressFormComponent } from './my-address-form/my-address-form.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyDragDropComponent } from './my-drag-drop/my-drag-drop.component';
import { MyNavigationComponent } from './my-navigation/my-navigation.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTreeComponent } from './my-tree/my-tree.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    NgFormsModule,
    ShcematicsRoutingModule
  ],
  declarations: [
    MainComponent,
    MyAddressFormComponent,
    MyDashboardComponent,
    MyDragDropComponent,
    MyNavigationComponent,
    MyTableComponent,
    MyTreeComponent
  ]
})
export class SchematicsModule { }
