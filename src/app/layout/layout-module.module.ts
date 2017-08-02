import { ContainerComponent } from './container/container.component';
import { BootstrapModuleModule } from './../bootstrap-module/bootstrap-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BootstrapModuleModule],
  declarations: [NavbarComponent, ContainerComponent],
  exports: [NavbarComponent, ContainerComponent]
})
export class LayoutModuleModule { }
