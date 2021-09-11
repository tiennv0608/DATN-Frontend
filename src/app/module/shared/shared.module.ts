import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloaderStartComponent} from '../../component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from '../../component/shared/navbar/navbar.component';
import {FooterComponent} from '../../component/shared/footer/footer.component';
import {SearchComponent} from '../../component/post/search/search.component';
import {NewPostComponent} from '../../component/post/new-post/new-post.component';
import {SideBarComponent} from '../../component/post/side-bar/side-bar.component';
import {SummaryPostComponent} from '../../component/post/summary-post/summary-post.component';
import {UploadComponent} from '../../component/upload/upload.component';

@NgModule({
  declarations: [
    UploadComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    UploadComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
