import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TelephoneDirective } from 'directive/directive.bundle';
import { PhoneValidator } from 'validators/validators.bundle';
import { FormBaseComponent } from '../base/form.base.component';

@Component({
  selector: `style-form`,
  templateUrl: `style.form.component.html`,
  styleUrls: [`style.form.component.sass`]
})
export class StyleFormComponent extends FormBaseComponent<any> {
  public float = new FormControl('auto', null);
  public fontColor = new FormControl('primary', null);
  public fontSize = new FormControl(14, [Validators.min(8), Validators.max(32)]);
  public maxInput = new FormControl('', [Validators.maxLength(10)]);
  public selectMe = new FormControl('one', null);
  public colorPicker = new FormControl('#673ab7', null);
  public dateTimeLocal = new FormControl(new Date(), null);
  public week = new FormControl(new Date(), null);
  public time = new FormControl(new Date(), null);
  public tel = new FormControl("+1 (555) 555-5555", [Validators.pattern(PhoneValidator.strongRegExp)]);
  public url = new FormControl('', null);

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
