import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PreloaderStartComponent} from './component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from './component/shared/navbar/navbar.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {PostListComponent} from './component/post/post-list/post-list.component';
import {UserModule} from './module/user/user.module';
import {HttpClientModule} from '@angular/common/http';
import {SearchbarComponent} from './component/shared/searchbar/searchbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {PostSearchComponent} from './component/post/post-search/post-search.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {environment} from '../environments/environment.prod';
import {MainComponent} from './component/post/main/main.component';
// @ts-ignore
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
import {NgxPaginationModule} from 'ngx-pagination';
import {PostTopCompanyComponent} from './component/post/post-top-company/post-top-company.component';
import {SideBarComponent} from './component/post/side-bar/side-bar.component';
import {SearchComponent} from './component/post/search/search.component';
import {NewPostComponent} from './component/post/new-post/new-post.component';
import {SummaryPostComponent} from './component/post/summary-post/summary-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainComponent,
    PreloaderStartComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent,
    SearchbarComponent,
    PostSearchComponent,
    PostTopCompanyComponent,
    SideBarComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatPaginatorModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
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
