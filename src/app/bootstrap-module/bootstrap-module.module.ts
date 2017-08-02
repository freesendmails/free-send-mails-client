import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  declarations: [],
  exports: [AlertModule]
})
export class BootstrapModuleModule { }
