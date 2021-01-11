import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { FormBaseComponent } from '../base/form.base.component';

@Component({
  selector: `other-form`,
  templateUrl: `other.form.component.html`,
  styleUrls: [`other.form.component.sass`]
})
export class OtherFormComponent extends FormBaseComponent<any> {
  public constructor(fb: FormBuilder, private snackBar: MatSnackBar) {
    super(fb);
  }

  public CreateForm(): FormGroup {
    return this.fb.group({
      float: ['auto', null],
      fontColor: ['primary', null],
      fontSize: [14, [Validators.min(8), Validators.max(32)]],
      maxInput: ['', [Validators.maxLength(10)]],
      selectMe: ['one', null],
      colorPicker: ['#673ab7', null]
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
