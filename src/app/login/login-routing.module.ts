import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const appRoutes: Routes = [
  { path: '',
  component: PageLoginComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class LoginRoutingModule { }
