import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostDetailComponent} from '../../component/post/post-detail/post-detail.component';
import {SharedModule} from '../shared/shared.module';
import {FooterComponent} from '../../component/shared/footer/footer.component';
import {JwPaginationComponent} from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import {PostSearchComponent} from '../../component/post/post-search/post-search.component';
import {AdvancedComponent} from '../../component/advanced/advanced.component';
import {AppModule} from '../../app.module';
import {CarouselModule} from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    PostCreateComponent,
    PostEditComponent,
    PostDetailComponent,
    AdvancedComponent
    ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    CarouselModule
  ],
  exports: [
  PostEditComponent,
  PostDetailComponent,
]
})
export class PostModule { }
