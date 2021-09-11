import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PostListComponent} from './component/post/post-list/post-list.component';
import {RecommendedPostComponent} from './component/post/recommended-post/recommended-post.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SearchbarComponent} from './component/shared/searchbar/searchbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostSearchComponent} from './component/post/post-search/post-search.component';
import {environment} from '../environments/environment.prod';
import {MainComponent} from './component/post/main/main.component';
// @ts-ignore
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';

import {SearchComponent} from './component/post/search/search.component';
import {NewPostComponent} from './component/post/new-post/new-post.component';

import {SideBarComponent} from './component/post/side-bar/side-bar.component';
import {PreloaderStartComponent} from './component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from './component/shared/navbar/navbar.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {PostTopCompanyComponent} from './component/post/post-top-company/post-top-company.component';
import {SearchAdvancedComponent} from './component/shared/search-advanced/search-advanced.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {JwPaginationModule} from 'jw-angular-pagination';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainComponent,
    SearchComponent,
    NewPostComponent,
    SideBarComponent,
    RecommendedPostComponent,
    PreloaderStartComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent,
    SearchbarComponent,
    FooterComponent,
    PostTopCompanyComponent,
    PostSearchComponent,
    SearchAdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    JwPaginationModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    IvyCarouselModule
  ],
  providers: [],
  exports: [
    SideBarComponent,
    MainComponent,
    SearchAdvancedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
