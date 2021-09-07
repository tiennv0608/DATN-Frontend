import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdvancedComponent} from "../../component/advanced/advanced.component";


@NgModule({
  declarations: [
    PostCreateComponent,
    PostEditComponent,
    AdvancedComponent
  ],

  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
