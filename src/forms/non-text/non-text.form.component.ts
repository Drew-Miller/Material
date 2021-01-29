import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { PhoneValidator } from 'validators/validators.bundle';
import { FormBaseComponent } from '../base/form.base.component';

@Component({
  selector: `non-text-form`,
  templateUrl: `./non-text.form.component.html`,
  styleUrls: [`./non-text.form.component.sass`]
})
export class NonTextFormComponent extends FormBaseComponent<any> {
  public maxInput = new FormControl('', [Validators.maxLength(10)]);
  public colorPicker = new FormControl('black', null);

  public constructor(fb: FormBuilder) {
    super(fb);
  }

  public CreateForm(): FormGroup {
    return this.fb.group({});
  }

  public OnSubmit(): Observable<boolean> {
    return of(true);
  }
}
