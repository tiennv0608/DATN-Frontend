import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {CompanyAccountComponent} from '../../component/admin/company-account/company-account.component';
import {CompanyListComponent} from '../../component/admin/company-list/company-list.component';
import {CompanyUpdateComponent} from '../../component/admin/company-update/company-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CompanyInfoComponent} from '../../component/admin/company-info/company-info.component';

@NgModule({
  declarations: [
    CompanyAccountComponent,
    CompanyListComponent,
    CompanyUpdateComponent,
    CompanyInfoComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    // SharedModule,
    // SharedModule
  ],
  exports: [
    CompanyAccountComponent,
    CompanyListComponent,
    CompanyUpdateComponent,
    CompanyInfoComponent

  ]
})
export class AdminModule { }
