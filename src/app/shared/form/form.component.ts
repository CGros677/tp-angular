import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AmbForm, User} from '../../../data/user';
import {matchPasswordsValidator} from '../match-passwords-validator.directive';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {
  user: User = new User('', '', '', '', '', false, false, '');
  
  profileForm: AmbForm;
  submit = false;

  constructor(private apiService: ApiService) {
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  ngOnInit(): void {
    this.profileForm = new AmbForm({
      firstName: new FormControl(this.user.firstName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('^[A-Z][A-Z-a-z\é\è\ê\ë\î\ï-\û\ü\â\ä\ç\à\ù\ñ]+$')
      ]),
      name: new FormControl(this.user.lastName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      dateOfBirth: new FormControl(this.user.dob, [
        Validators.required,
        Validators.pattern('((19[2-9][0-9]|200[0-9]))-((0[1-9]|1[0-2]))-((0[1-9]|[1-2][0-9])|(3[0-1]))')
      ]),
      phoneNumber: new FormControl(this.user.phone, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(13)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(70),
        Validators.email
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      confirmPassword: new FormControl(this.user.confirmPassword, [
        Validators.required,
      ]),
      generalConditions: new FormControl(this.user.checkBox, [
        Validators.requiredTrue
      ]),
    }, { validators: matchPasswordsValidator });
  }
  get name() {return this.profileForm.get('name'); }
  get dateOfBirth() {return this.profileForm.get('dateOfBirth'); }
  get phoneNumber() {return this.profileForm.get('phoneNumber'); }
  get email() {return this.profileForm.get('email'); }
  get password() {return this.profileForm.get('password'); }
  get confirmPassword() {return this.profileForm.get('confirmPassword'); }
  get generalConditions() {return this.profileForm.get('generalConditions'); }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.submit = true;
  }
}
