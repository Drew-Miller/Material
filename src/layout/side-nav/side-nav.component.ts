import { Component } from '@angular/core';
import { ModelBase } from 'core/base.bundle';

@Component({
  selector: 'side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['./side-nav.component.sass'],
  inputs: ModelBase.Inputs,
  outputs: ModelBase.Outputs
})
export class SideNavComponent extends ModelBase<boolean> { }
