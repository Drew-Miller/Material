import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { PhoneValidator } from 'validators/validators.bundle';
import { TelephoneDirective } from 'directives/directives.bundle';
import { FormBaseComponent } from '../base/form.base.component';

@Component({
  selector: `telephone-form`,
  templateUrl: `./telephone.form.component.html`,
  styleUrls: [`./telephone.form.component.sass`]
})
export class TelephoneFormComponent extends FormBaseComponent<any> {
  public value = TelephoneDirective.mask;
  public tel = new FormControl("+1 (555) 555-5555", [Validators.pattern(PhoneValidator.strongRegExp)]);

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
