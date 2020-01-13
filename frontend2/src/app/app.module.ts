import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { JarwisService } from './service/jarwis.service';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { AfterLoginService } from './service/after-login.service';
import { BeforeLoginService } from './service/before-login.service';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    AppRoutingModule,
    HttpClientModule,
    SnotifyModule

  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
