import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageClientsComponent,
    children: [
      { path: '', redirectTo: 'detail', pathMatch: 'full' },
      { path: 'add', component: PageAddClientComponent },
      { path: 'detail', component: DetailClientComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
