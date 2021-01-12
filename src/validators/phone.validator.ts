import { FormControl } from '@angular/forms';
import { ValidationResult } from './validation-result.interface';

export class PhoneValidator {
  public static strongRegExp = /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/;

  public static strong(control: FormControl): ValidationResult {
    if (control.pristine) {
      return;
    }

    if (!PhoneValidator.strongRegExp.test(control.value)) {
      return { invalidTel : true };
    }

    return;
  }
}
