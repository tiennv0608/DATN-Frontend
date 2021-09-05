import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {RegisterFormComponent} from '../../component/user/register-form/register-form.component';
import {LoginFormComponent} from '../../component/user/login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterFormComponent,
    LoginFormComponent
  ]
})
export class UserModule {
}
