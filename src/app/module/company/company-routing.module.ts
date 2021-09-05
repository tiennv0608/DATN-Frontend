import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from '../../component/user/login-form/login-form.component';
import {RegisterFormComponent} from '../../component/user/register-form/register-form.component';
import {CompanyLoginComponent} from '../../component/company/company-login/company-login.component';
import {CompanyRegisterComponent} from '../../component/company/company-register/company-register.component';
import {CompanyEditComponent} from '../../component/company/company-edit/company-edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: CompanyLoginComponent
  },
  {
    path: 'register',
    component: CompanyRegisterComponent
  },
  {
    path: 'edit/:id',
    component: CompanyEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
