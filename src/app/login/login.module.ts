import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule, LoginRoutingModule
  ]
})
export class LoginModule { }
