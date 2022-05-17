import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavaBarComponent  } from './navbar/navbar.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowUsersComponent } from './user/show-users/show-users.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { LoginComponent } from './login/login/login.component';
import { EmailFormComponent } from './login/forgetPassword/email-form/email-form.component';
import { PasswordFormComponent } from './login/forgetPassword/password-form/password-form.component';
import { AuthGuard } from './guard/auth.guard';
import { PopUpComponent } from './pop-up/pop-up.component';
import { TwoFactorAuthenticationComponent } from './login/two-factor-authentication/two-factor-authentication.component';
import { FooterComponent } from './footer/footer.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { ActivateAccountComponent } from './login/activate-account/activate-account.component';
import { LogOutComponent } from './login/log-out/log-out.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { ChangePasswordComponent } from './user/my-profile/change-password/change-password.component';
import { AdminModule } from './admin/admin.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { TemplateAdminComponent } from './template-admin/template-admin.component';
import { TemplateUserComponent } from './template-user/template-user.component';
import { ContentHomeComponent } from './content-home/content-home.component';

// import {
//   SocialLoginModule,
//   SocialAuthServiceConfig,
// } from 'angularx-social-login';
// import { GoogleLoginProvider } from 'angularx-social-login';







@NgModule({
  declarations: [
    AppComponent,
    NavaBarComponent ,
    FooterComponent,
    AddClientComponent,
    ShowUsersComponent,
    LoginComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    EmailFormComponent,
    PasswordFormComponent,
    PopUpComponent,
    TwoFactorAuthenticationComponent,
    AddAdminComponent,
    ActivateAccountComponent,
    LogOutComponent,
    SideBarComponent,
    HomeComponent,
    WelcomeComponent,
    QuestionComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    TemplateAdminComponent,
    TemplateUserComponent,
    ContentHomeComponent,
  

    
    
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxCaptchaModule,
    AdminModule,
  
   
    
    
  ],
    
    
    
  
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
