import { Component } from '@angular/core';
import { ModelBase } from 'core/base.bundle';

@Component({
  selector: `header`,
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.sass`],
  inputs: ModelBase.Inputs,
  outputs: ModelBase.Outputs
})
export class HeaderComponent extends ModelBase<boolean> { }
