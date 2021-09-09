import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './component/post/main/main.component';
import {SearchAdvancedComponent} from './component/post/search-advanced/search-advanced.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'search-advanced',
    component: SearchAdvancedComponent
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
