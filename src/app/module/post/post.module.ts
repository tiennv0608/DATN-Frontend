import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostDetailComponent} from '../../component/post/post-detail/post-detail.component';
import {SharedModule} from '../shared/shared.module';
import {AdvancedComponent} from "../../component/advanced/advanced.component";
import {PostSearchComponent} from '../../component/post/post-search/post-search.component';
import {SearchbarComponent} from '../../component/shared/searchbar/searchbar.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    PostCreateComponent,
    PostEditComponent,
    AdvancedComponent,
    PostDetailComponent ,SearchbarComponent,
  ],

  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [
    PostEditComponent,
    PostDetailComponent,
    SearchbarComponent,
  ]
})
export class PostModule { }
