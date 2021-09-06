import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyLoginComponent} from '../../component/company/company-login/company-login.component';
import {CompanyRegisterComponent} from '../../component/company/company-register/company-register.component';
import {CompanyInfoEditComponent} from '../../component/company/company-info-edit/company-info-edit.component';
import {AccountComponent} from '../../component/company/account/account.component';
import {InfoComponent} from '../../component/company/info/info.component';

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
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'edit',
    component: CompanyInfoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
