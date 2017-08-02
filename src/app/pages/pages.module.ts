import { LayoutModuleModule } from './../layout/layout-module.module';
import { BootstrapModuleModule } from './../bootstrap-module/bootstrap-module.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModuleModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class PagesModule { }
