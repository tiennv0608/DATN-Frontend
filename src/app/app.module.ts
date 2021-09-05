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
import { CompanyEditComponent } from './component/company/company-edit/company-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderStartComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
