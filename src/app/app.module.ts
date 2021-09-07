import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PostListComponent} from './component/post/post-list/post-list.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './module/user/user.module';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment.prod';
import {MainComponent} from './component/post/main/main.component';
// @ts-ignore
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
import {SharedModule} from './module/shared/shared.module';
import {SearchComponent} from './component/post/search/search.component';
import {NewPostComponent} from './component/post/new-post/new-post.component';
import {SideBarComponent} from './component/post/side-bar/side-bar.component';
import {SummaryPostComponent} from './component/post/summary-post/summary-post.component';
import {PreloaderStartComponent} from './component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from './component/shared/navbar/navbar.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {JwPaginationComponent, JwPaginationModule} from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListPostByIdComponent } from './component/post/list-post-by-id/list-post-by-id.component';
import { PostTopCompanyComponent } from './component/post/post-top-company/post-top-company.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainComponent,
    SearchComponent,
    NewPostComponent,
    SideBarComponent,
    SummaryPostComponent,
    PreloaderStartComponent,
    NavbarComponent,
    FooterComponent,
    PostTopCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    // SharedModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    JwPaginationModule,
    NgxPaginationModule
  ],
  providers: [],
  exports: [
    SideBarComponent,
    MainComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
