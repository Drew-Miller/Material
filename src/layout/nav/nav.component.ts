import {Component, Input, Output} from '@angular/core';
import {ModelBaseComponent} from 'core/base.bundle';

@Component({
  selector: 'nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['./nav.component.sass'],
  inputs: ModelBaseComponent.Inputs,
  outputs: ModelBaseComponent.Outputs
})
export class NavComponent extends ModelBaseComponent<boolean> { }
