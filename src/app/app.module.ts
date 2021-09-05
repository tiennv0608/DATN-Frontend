import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PreloaderStartComponent} from './component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from './component/shared/navbar/navbar.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {PostListComponent} from './component/post/post-list/post-list.component';
import {CompanyEditComponent} from './component/company/company-edit/company-edit.component';
import {SearchComponent} from './component/post/search/search.component';
import {NewPostComponent} from './component/post/new-post/new-post.component';
import {SummaryPostComponent} from './component/post/summary-post/summary-post.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './module/user/user.module';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment.prod';
import {MainComponent} from './component/post/main/main.component';
import {SideBarComponent} from './component/post/side-bar/side-bar.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import { UploadComponent } from './component/upload/upload.component';




@NgModule({
  declarations: [
    AppComponent,
    PreloaderStartComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent,
    CompanyEditComponent,
    MainComponent,
    SearchComponent,
    NewPostComponent,
    SideBarComponent,
    SummaryPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
