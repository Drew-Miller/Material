import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { PhoneValidator } from 'validators/validators.bundle';
import { FormBaseComponent } from '../base/form.base.component';

@Component({
  selector: `other-form`,
  templateUrl: `other.form.component.html`,
  styleUrls: [`other.form.component.sass`]
})
export class OtherFormComponent extends FormBaseComponent<any> {
  public constructor(fb: FormBuilder) {
    super(fb);
  }

  public CreateForm(): FormGroup {
    return this.fb.group({
      float: ['auto', null],
      fontColor: ['primary', null],
      fontSize: [14, [Validators.min(8), Validators.max(32)]],
      maxInput: ['', [Validators.maxLength(10)]],
      selectMe: ['one', null],
      colorPicker: ['#673ab7', null],
      dateTimeLocal: [new Date(), null],
      week: [new Date(), null],
      time: [new Date(), null],
      tel: [null, [Validators.pattern(PhoneValidator.strongRegExp)]],
      url: ['', null]
    });
  }

  public OnSubmit(): Observable<boolean> {
    // validate form
    if (this.Form.invalid) {
      return of(false);
    }

    // create model

    // form model is submitted.
    return of(true);
  }
}
