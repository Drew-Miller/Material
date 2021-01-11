import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { User } from 'core/models.bundle';
import { FormBaseComponent } from '../base/form.base.component';
import { PasswordValidator } from 'validators/validators.bundle';

@Component({
  selector: `user-form`,
  templateUrl: `./user.form.component.html`,
  styleUrls: [`./user.form.component.sass`],
  inputs: FormBaseComponent.Inputs,
  outputs: FormBaseComponent.Outputs
})
export class UserFormComponent extends FormBaseComponent<User> {
  public hide = true;

  public constructor(fb: FormBuilder, private snackBar: MatSnackBar) {
    super(fb);
  }

  public CreateForm(): FormGroup {
    return this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(PasswordValidator.strongRegExp) ]]
    });
  }

  public OnSubmit(): Observable<boolean> {
    // validate form
    if (this.Form.invalid) {
      return of(false);
    }

    // create model
    if (!this.model) {
      this.model = new User();
    }

    this.model.Firstname = this.Form.value.firstname;
    this.model.Lastname = this.Form.value.lastname;
    this.model.Email = this.Form.value.email;
    this.model.Password = this.Form.value.password;

    const snackBarRef = this.snackBar.open(`Hello ${this.model.Firstname} ${this.model.Lastname}!`, 'Close');

    // form model is submitted.
    return of(true);
  }
}

