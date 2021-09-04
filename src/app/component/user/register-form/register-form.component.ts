import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {ResponseBody} from '../../../common/response-body';
import {Constant} from '../../../common/constant';
import {UserRegisterForm} from '../../../model/user/user-register-form';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  message = '';
  isRegistered = false;
  // userRegister: UserRegisterForm = {};

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmedPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
  });

  isPassword = 'password';
  isConfirmedPassword = 'password';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  register(): void {
    const userRegister = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      phone: this.registerForm.value.phone,
      type: 'USER'
    };
    this.authService.registerUser(userRegister).subscribe((response: ResponseBody) => {
      if (response.responseCode === Constant.SUCCESS) {
        this.isRegistered = true;
        this.message = response.responseMessage;
      } else {
        this.message = response.responseMessage;
      }
    }, error => {
      console.log('System error: ', error);
    });
  }

  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  showConfirmedPass(): void {
    this.isConfirmedPassword = (this.isConfirmedPassword === 'password') ? 'text' : 'password';
  }

}
