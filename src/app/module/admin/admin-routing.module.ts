import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyAccountComponent} from '../../component/admin/company-account/company-account.component';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'company-accounts',
    component: CompanyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSliderModule, HttpClientModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
