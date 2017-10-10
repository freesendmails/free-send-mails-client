import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestMailErrorComponent } from './test-mail-error/test-mail-error.component';
import { TestMailSuccessComponent } from './test-mail-success/test-mail-success.component';
import { TestMailComponent } from './test-mail/test-mail.component';
import { LayoutModuleModule } from './../layout/layout-module.module';
import { BootstrapModuleModule } from './../bootstrap-module/bootstrap-module.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationUsersComponent } from './authentication-users/authentication-users.component';
import { AuthenticationUsersSuccessComponent } from './authentication-users-success/authentication-users-success.component';
import { AuthenticationUsersErrorComponent } from './authentication-users-error/authentication-users-error.component';
import { AuthenticationUserSuccessAuthenticatedComponent } from './authentication-user-success-authenticated/authentication-user-success-authenticated.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModuleModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    TestMailComponent,
    TestMailSuccessComponent,
    TestMailErrorComponent,
    PageNotFoundComponent,
    AuthenticationUsersComponent,
    AuthenticationUsersSuccessComponent,
    AuthenticationUsersErrorComponent,
    AuthenticationUserSuccessAuthenticatedComponent
  ]
})
export class PagesModule { }
