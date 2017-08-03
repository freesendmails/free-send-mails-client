import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestMailErrorComponent } from './test-mail-error/test-mail-error.component';
import { TestMailSuccessComponent } from './test-mail-success/test-mail-success.component';
import { TestMailComponent } from './test-mail/test-mail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-mail', component: TestMailComponent },
  { path: 'test-mail-success', component: TestMailSuccessComponent },
  { path: 'test-mail-error', component: TestMailErrorComponent},
  { path: 'page-not-found', component: PageNotFoundComponent },

  { path: '**',  redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
