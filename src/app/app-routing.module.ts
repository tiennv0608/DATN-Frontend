import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from './component/post/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./module/user/user.module').then(module => module.UserModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./module/company/company.module').then(module => module.CompanyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
