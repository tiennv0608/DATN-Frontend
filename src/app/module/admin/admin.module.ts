import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {CompanyAccountComponent} from '../../component/admin/company-account/company-account.component';


@NgModule({
  declarations: [
    CompanyAccountComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    CompanyAccountComponent
  ]
})
export class AdminModule { }
