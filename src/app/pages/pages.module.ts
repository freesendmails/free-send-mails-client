import { TestMailSuccessComponent } from './test-mail-success/test-mail-success.component';
import { TestMailComponent } from './test-mail/test-mail.component';
import { LayoutModuleModule } from './../layout/layout-module.module';
import { BootstrapModuleModule } from './../bootstrap-module/bootstrap-module.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    TestMailSuccessComponent
  ]
})
export class PagesModule { }
