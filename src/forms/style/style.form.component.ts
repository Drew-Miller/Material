import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
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
