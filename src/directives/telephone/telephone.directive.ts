import { Directive } from '@angular/core';
import { ModelBase } from 'core/base.bundle';

@Directive({
  selector: `[telephone]`,
  host: {
    '(keydown)': 'KeyDown($event)',
    '(keyup)': 'KeyUp($event)',
    '(focus)': 'SetCursor($event)',
    '(click)': 'SetCursor($event)'
  },
  inputs: ModelBase.Inputs,
  outputs: ModelBase.Outputs
})
export class TelephoneDirective extends ModelBase<string> {
  public static mask = '+1 (___) ___-____';
  public numbers: number[] = [];
  public pressedKeys: { [key: string]: boolean } = {};

  public KeyDown($event: KeyboardEvent) {
    $event.preventDefault();

    const key = $event.key;
    if (this.pressedKeys[key] && key !== 'Backspace') {
      return;
    }
    this.pressedKeys[key] = true;

    const n = Number(key);
    let v = this.model;
    if (!Number.isNaN(n) && this.numbers.length < 10) {
      this.numbers.push(n);
      const index = v.indexOf('_');
      v = v.slice(0, index) + key + v.slice(index + 1);
    } else if (key === 'Backspace' && this.numbers.length > 0) {
      this.numbers.pop();
      const index = TelephoneDirective.mask.split('_', this.numbers.length + 1).join('_').length;
      v = v.slice(0, index) + '_' + v.slice(index + 1);
    }

    this.ModelChange(v);
  }

  public KeyUp($event: KeyboardEvent) {
    this.SetCursor($event);
    this.pressedKeys[$event.key] = false;
  }

  public SetCursor($event: KeyboardEvent) {
    const input = ($event.target as HTMLInputElement);
    const v = this.model;
    let index = v.indexOf('_');
    index = index === -1 ? v.length : index;
    input.setSelectionRange(index, index);
  }
}
