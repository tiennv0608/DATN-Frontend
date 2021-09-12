import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './component/post/main/main.component';
import {SearchAdvancedComponent} from './component/shared/search-advanced/search-advanced.component';
import {UnderConstructionComponent} from './component/shared/under-construction/under-construction.component';


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
  },
  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin.module').then(module => module.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule {
}
