import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from './component/post/post-list/post-list.component';
import {PostSearchComponent} from './component/post/post-search/post-search.component';
import {MainComponent} from './component/post/main/main.component';
import {PageComponent} from "./component/user/page/page.component";
import {ListExpComponent} from "./component/user/page/list-exp/list-exp.component";
import {CreateExpComponent} from "./component/user/page/create-exp/create-exp.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./module/post/post.module').then(module => module.PostModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./module/user/user.module').then(module => module.UserModule)
  },
  {
    path: 'page',
   component: PageComponent
  }, {
    path: 'exp/list',
   component: ListExpComponent

  }, {
    path: 'exp/create',
   component: CreateExpComponent

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
// @ts-ignore
export class AppRoutingModule {
}
