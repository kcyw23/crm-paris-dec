import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { SharedModule } from '../shared/shared.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';

@NgModule({
  declarations: [
    PageClientsComponent,
    ItemClientComponent,
    ListClientsComponent,
    PageAddClientComponent,
    AddClientComponent,
    FormClientComponent,
    DetailClientComponent
  ],
  imports: [CommonModule, ClientsRoutingModule, SharedModule]
})
export class ClientsModule {}
