import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderStartComponent } from './component/shared/preloader-start/preloader-start.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { PostListComponent } from './component/post/post-list/post-list.component';
import {UserModule} from './module/user/user.module';
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

@NgModule({
  declarations: [
    AppComponent,
    PreloaderStartComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent,
    SearchbarComponent,
    PostSearchComponent
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
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
