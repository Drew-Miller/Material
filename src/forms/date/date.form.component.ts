import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FormBaseComponent } from '../base/form.base.component';

@Component({
  selector: `date-form`,
  templateUrl: `./date.form.component.html`,
  styleUrls: [`./date.form.component.sass`]
})
export class DateFormComponent extends FormBaseComponent<any> {
  public dateTimeLocal = new FormControl(new Date(), null);
  public week = new FormControl(new Date(), null);
  public time = new FormControl(new Date(), null);

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
