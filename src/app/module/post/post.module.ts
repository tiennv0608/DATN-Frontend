import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PostDetailComponent} from '../../component/post/post-detail/post-detail.component';
import {SharedModule} from '../shared/shared.module';
import {FooterComponent} from '../../component/shared/footer/footer.component';
import {JwPaginationComponent} from 'jw-angular-pagination';
import {NewPostComponent} from '../../component/post/new-post/new-post.component';
import {SummaryPostComponent} from '../../component/post/summary-post/summary-post.component';


@NgModule({
  declarations: [
    PostCreateComponent,
    PostEditComponent,
    PostDetailComponent,
    NewPostComponent,
    SummaryPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [NewPostComponent,
    SummaryPostComponent
  ]
})
export class PostModule {
}
