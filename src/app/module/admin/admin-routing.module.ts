import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyAccountComponent} from '../../component/admin/company-account/company-account.component';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';
import {CompanyListComponent} from '../../component/admin/company-list/company-list.component';
import {CompanyUpdateComponent} from '../../component/admin/company-update/company-update.component';
import {CompanyInfoComponent} from '../../component/admin/company-info/company-info.component';

const routes: Routes = [
  {
    path: 'company-accounts',
    component: CompanyAccountComponent
  },
  {
    path: 'company-list',
    component: CompanyListComponent
  },
  {
    path: 'company-updateinfo/:id',
    component: CompanyUpdateComponent
  },
  {
    path: 'company-info/:id',
    component: CompanyInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSliderModule, HttpClientModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
