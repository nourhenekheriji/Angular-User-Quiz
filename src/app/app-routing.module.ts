import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';


import { AuthGuard } from './guard/auth.guard';
import { AddClientComponent } from './client/add-client/add-client.component';
import { EmailFormComponent } from './login/forgetPassword/email-form/email-form.component';
import { PasswordFormComponent } from './login/forgetPassword/password-form/password-form.component';
import { LoginComponent } from './login/login/login.component';
import { TwoFactorAuthenticationComponent } from './login/two-factor-authentication/two-factor-authentication.component';
import { ShowUsersComponent } from './user/show-users/show-users.component';
import { AdminGuard } from './guard/roles/admin.guard';
import { ActivateAccountComponent } from './login/activate-account/activate-account.component';
import { LogOutComponent } from './login/log-out/log-out.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { ChangePasswordComponent } from './user/my-profile/change-password/change-password.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { TemplateAdminComponent } from './template-admin/template-admin.component';
import { TemplateUserComponent } from './template-user/template-user.component';

const routes: Routes = [

  // {
  //   path:'showUsers',
  //   component:ShowUsersComponent,
  //   canActivate:[AuthGuard]
  // },


  // {
  //   path:'userProfile',
  //   component:MyProfileComponent,
  //   canActivate:[AuthGuard]
  // },
  {path: '',redirectTo: 'home',pathMatch: 'full',},
  {path:"home", component: ActivateAccountComponent},
  {path:'activateAccount/:id',component:ActivateAccountComponent},
  

  { path: 'Admin', component: TemplateAdminComponent, 
    children: [
  {path:'addAdmin',component:AddAdminComponent},
  {path:'addClient',component:AddClientComponent},
  {path:'logOut',component:LogOutComponent},
  {path:'showUsers',component:ShowUsersComponent},
  {path:'changePasswordClient',component:ChangePasswordComponent},
  {path:'forgetPasswordEmailForm',component:EmailFormComponent},
  {path:'forgetPasswordPasswordForm/:id',component:PasswordFormComponent},
  
  {path:'twoFactorAuthentication/:id',component:TwoFactorAuthenticationComponent},
]
},
  
  {path:'welcome',component:WelcomeComponent},
  {path:'question',component:QuestionComponent},


  { path: 'User', component: TemplateUserComponent, 
  children: [
    {path:'login',component:LoginComponent},
    {path:'userProfile',component:MyProfileComponent},
    {path:'logOut',component:LogOutComponent},
    
  ]
 }];







// {path:'admin',
// component:AdminLayoutComponent,
// loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule )}

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
