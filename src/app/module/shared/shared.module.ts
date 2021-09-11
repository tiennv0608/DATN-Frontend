import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloaderStartComponent} from '../../component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from '../../component/shared/navbar/navbar.component';
import {FooterComponent} from '../../component/shared/footer/footer.component';
import {SearchComponent} from '../../component/post/search/search.component';
import {NewPostComponent} from '../../component/post/new-post/new-post.component';
import {SideBarComponent} from '../../component/post/side-bar/side-bar.component';
import {RecommendedPostComponent} from '../../component/post/recommended-post/recommended-post.component';
import {SearchAdvancedComponent} from '../../component/shared/search-advanced/search-advanced.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule {
}
