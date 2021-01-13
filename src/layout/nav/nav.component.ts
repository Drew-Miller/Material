import { Component } from '@angular/core';
import { ModelBase } from 'core/base.bundle';

@Component({
  selector: 'nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['./nav.component.sass'],
  inputs: ModelBase.Inputs,
  outputs: ModelBase.Outputs
})
export class NavComponent extends ModelBase<boolean> { }
