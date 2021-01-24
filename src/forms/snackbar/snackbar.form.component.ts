import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBaseComponent } from '../base/form.base.component';

@Component({
  selector: `snackbar-form`,
  templateUrl: `./snackbar.form.component.html`,
  styleUrls: [`./snackbar.form.component.sass`],
  inputs: FormBaseComponent.Inputs,
  outputs: FormBaseComponent.Outputs
})
export class SnackBarFormComponent extends FormBaseComponent<string> implements OnInit {
  constructor(fb: FormBuilder, private snackBar: MatSnackBar) {
    super(fb);
  }

  protected CreateForm(): FormGroup {
    return this.fb.group({
      message: ['Hello World!', [Validators.required]]
    });
  }

  protected OnSubmit(): Observable<boolean> {
    // validate form
    if (this.Form.invalid) {
      return of(false);
    }

    // create the model
    this.model = this.Form.value.message;

    const sanckBarRef = this.snackBar.open(this.model, 'Undo');
    sanckBarRef.afterDismissed().pipe(map((x: MatSnackBarDismiss) => {
      if (x.dismissedByAction) {
        // undo action
        this.snackBar.open('Item removed', 'Close');
      }
      return true;
    }));

    // form model is submitted.
    return of(true);
  }
}
