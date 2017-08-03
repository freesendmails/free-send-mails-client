import { TestMailSuccessComponent } from './test-mail-success/test-mail-success.component';
import { TestMailComponent } from './test-mail/test-mail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-mail', component: TestMailComponent },
  { path: 'test-mail-success', component: TestMailSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
