import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PostDetailComponent} from '../../component/post/post-detail/post-detail.component';
import {SharedModule} from '../shared/shared.module';
import {AdvancedComponent} from "../../component/advanced/advanced.component";
import {PostSearchComponent} from '../../component/post/post-search/post-search.component';


@NgModule({
  declarations: [
    PostCreateComponent,
    PostEditComponent,
    AdvancedComponent,
    PostDetailComponent
  ],

  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
  PostEditComponent,
  PostDetailComponent,
]
})
export class PostModule { }
