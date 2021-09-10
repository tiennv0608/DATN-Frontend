import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from '../../component/user/login-form/login-form.component';
import {RegisterFormComponent} from '../../component/user/register-form/register-form.component';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSliderModule, HttpClientModule],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
