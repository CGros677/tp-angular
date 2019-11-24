import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
/** Password and confirmation must match */
export const matchPasswordsValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmation = control.get('confirmPassword');

  return password && confirmation && password.value !== confirmation.value ? { matchPasswords: true } : null;
};
@Directive({
  selector: '[appMatchPasswordsValidator]'
})
export class MatchPasswordsValidatorDirective {

  constructor() { }

}
