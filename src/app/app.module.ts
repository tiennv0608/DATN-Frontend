import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PostListComponent} from './component/post/post-list/post-list.component';
import {SummaryPostComponent} from './component/post/summary-post/summary-post.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CompanyRegisterComponent } from './component/company/company-register/company-register.component';
import { CompanyLoginComponent } from './component/company/company-login/company-login.component';
import { SearchbarComponent } from './component/shared/searchbar/searchbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import { PostSearchComponent } from './component/post/post-search/post-search.component';
import {MatPaginatorModule} from '@angular/material/paginator';
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
import {PreloaderStartComponent} from './component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from './component/shared/navbar/navbar.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {JwPaginationComponent, JwPaginationModule} from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListPostByIdComponent } from './component/post/list-post-by-id/list-post-by-id.component';
import { PostTopCompanyComponent } from './component/post/post-top-company/post-top-company.component';
import { CompanyDetailsComponent } from './component/company/company-details/company-details.component';


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
    PostListComponent,
    SearchbarComponent,
    PostSearchComponent,
    FooterComponent,
    PostTopCompanyComponent,
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
    FormsModule
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
