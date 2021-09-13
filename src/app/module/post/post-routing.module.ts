import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';
import {PostDetailComponent} from '../../component/post/post-detail/post-detail.component';
import {AdvancedComponent} from '../../component/advanced/advanced.component';
import {PostSearchComponent} from '../../component/post/post-search/post-search.component';
<<<<<<< HEAD
import { ListExpComponent } from 'src/app/component/user/page/list-exp/list-exp.component';
=======
import {RecommendedPostComponent} from '../../component/post/recommended-post/recommended-post.component';
>>>>>>> 30e9d3308119b4329f8d5e1b1ddca29e7bf59eb2

const routes: Routes = [
  {
    path: 'create',
    component: PostCreateComponent
  }, {
    path: 'search-advanced',
    component: AdvancedComponent
  },
  {
    path: 'view/:id',
    component: PostDetailComponent
  },
  {
    path: 'edit/:id',
    component: PostEditComponent
  },
  {
    path: 'search',
    component: PostSearchComponent
  },
  {
    path: 'recommended',
    component: RecommendedPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
