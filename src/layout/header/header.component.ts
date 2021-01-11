import { Component } from '@angular/core';
import { ModelBaseComponent } from 'core/base.bundle';

@Component({
  selector: `header`,
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.sass`],
  inputs: ModelBaseComponent.Inputs,
  outputs: ModelBaseComponent.Outputs
})
export class HeaderComponent extends ModelBaseComponent<boolean> { }
