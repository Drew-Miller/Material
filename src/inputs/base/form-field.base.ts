import { Input } from '@angular/core';
import { ModelBaseComponent } from 'core/base.bundle';

export abstract class FormFieldBase<T> extends ModelBaseComponent<T> {
  public static Inputs = ['matLabel', 'hintLabel', 'placeHolder', 'type', 'appearance']
    .concat(ModelBaseComponent.Inputs);

  public static Outputs = ModelBaseComponent.Outputs;

  @Input() matLabel: string;
  @Input() hintLabel: string;
  @Input() placeHolder: string;
  @Input() type: string;
  @Input() appearance: string;
}
