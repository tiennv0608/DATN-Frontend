import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './user/create/create.component';
import { ListComponent } from './user/list/list.component';
import { EditComponent } from './user/edit/edit.component';
import { DeleteComponent } from './user/delete/delete.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { UserModule } from './module/user/user.module';
import { PreloaderStartComponent } from './component/shared/preloader-start/preloader-start.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { PostListComponent } from './component/post/post-list/post-list.component';
import { CompanyRegisterComponent } from './component/company/company-register/company-register.component';
import { CompanyLoginComponent } from './component/company/company-login/company-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    PreloaderStartComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
