import { FooterComponent } from './footer/footer.component';
import { ContainerDocumentationComponent } from './container-documentation/container-documentation.component';
import { PagesRoutingModule } from './../pages/pages-routing.module';
import { ContainerHeaderComponent } from './container-header/container-header.component';
import { ContainerExampleComponent } from './container-example/container-example.component';
import { BootstrapModuleModule } from './../bootstrap-module/bootstrap-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BootstrapModuleModule,
    PagesRoutingModule
  ],
  declarations: [
    NavbarComponent,
    ContainerExampleComponent,
    ContainerHeaderComponent,
    ContainerDocumentationComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    ContainerExampleComponent,
    ContainerHeaderComponent,
    ContainerDocumentationComponent,
    FooterComponent
  ]
})
export class LayoutModuleModule { }
