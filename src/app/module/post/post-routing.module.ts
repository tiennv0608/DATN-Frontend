import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: 'create',
    component:PostCreateComponent
  },
  {
    path: 'edit/:id',
    component: PostEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
