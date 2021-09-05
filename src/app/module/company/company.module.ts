import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import {CompanyLoginComponent} from '../../component/company/company-login/company-login.component';
import {CompanyRegisterComponent} from '../../component/company/company-register/company-register.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CompanyLoginComponent, CompanyRegisterComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CompanyLoginComponent, CompanyRegisterComponent]
})
export class CompanyModule {
}
