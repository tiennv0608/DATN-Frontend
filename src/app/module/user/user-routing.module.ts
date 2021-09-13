import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from '../../component/user/login-form/login-form.component';
import {RegisterFormComponent} from '../../component/user/register-form/register-form.component';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { ListExpComponent } from 'src/app/component/user/page/list-exp/list-exp.component';
=======
import {CvComponent} from '../../component/user/cv/cv.component';
>>>>>>> 30e9d3308119b4329f8d5e1b1ddca29e7bf59eb2

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'cv',
    component: CvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSliderModule, HttpClientModule],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
