import { Component, OnInit } from '@angular/core';
import { FormFieldBase } from '../base/form-field.base';

@Component({
  selector: `telephone-input`,
  templateUrl: `./telephone.input.component.html`,
  styleUrls: [`./telephone.input.component.sass`],
  inputs: FormFieldBase.Inputs,
  outputs: FormFieldBase.Outputs
})
export class TelephoneInputComponent extends FormFieldBase<string> implements OnInit {
  public mask = '+1 (___) ___-____';
  public numbers: number[] = [];
  public pressedKeys: { [key: string]: boolean } = {};

  public ngOnInit() {
    this.model = this.mask;
  }

  public KeyDown($event: KeyboardEvent) {
    $event.preventDefault();

    const key = $event.key;
    if (this.pressedKeys[key] && key !== 'Backspace') {
      return;
    }
    this.pressedKeys[key] = true;

    const n = Number(key);
    if (!Number.isNaN(n) && this.numbers.length < 10) {
      this.numbers.push(n);
      const index = this.model.indexOf('_');
      this.model = this.model.slice(0, index) + key + this.model.slice(index + 1);
    } else if (key === 'Backspace' && this.numbers.length > 0) {
      this.numbers.pop();
      const index = this.mask.split('_', this.numbers.length + 1).join('_').length;
      this.model = this.model.slice(0, index) + '_' + this.model.slice(index + 1);
    }

    this.ModelChange(this.model);
  }

  public KeyUp($event: KeyboardEvent) {
    this.SetCursor($event);
    this.pressedKeys[$event.key] = false;
  }

  public SetCursor($event: KeyboardEvent) {
    const input = ($event.target as HTMLInputElement);
    let index = this.model.indexOf('_');
    index = index === -1 ? this.model.length : index;
    input.setSelectionRange(index, index);
  }
}
