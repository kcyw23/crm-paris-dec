import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

@NgModule({
  declarations: [PageClientsComponent],
  imports: [
    CommonModule, ClientsRoutingModule
  ]
})
export class ClientsModule { }
