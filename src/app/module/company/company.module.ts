import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import {CompanyLoginComponent} from '../../component/company/company-login/company-login.component';
import {CompanyRegisterComponent} from '../../component/company/company-register/company-register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CompanyInfoEditComponent} from '../../component/company/company-info-edit/company-info-edit.component';
import {AppModule} from '../../app.module';
import {UploadComponent} from '../../component/upload/upload.component';


@NgModule({
  declarations: [CompanyLoginComponent,
    CompanyRegisterComponent,
    CompanyInfoEditComponent,
    UploadComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CompanyLoginComponent, CompanyRegisterComponent, CompanyInfoEditComponent, UploadComponent]
})
export class CompanyModule {
}
