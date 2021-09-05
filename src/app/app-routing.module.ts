import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./user/list/list.component";
import {CreateComponent} from "./user/create/create.component";
import {EditComponent} from "./user/edit/edit.component";
import {DeleteComponent} from "./user/delete/delete.component";

// const routes: Routes = [
//   {
//     path: 'users/list',
//     component: ListComponent
//   }, {
//     path: 'users/create',
//     component: CreateComponent
//   }, {
//     path: 'users/edit/:id',
//     component: EditComponent
//   }, {
//     path: 'users/delete/:id',
//     component: DeleteComponent
//   }
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
