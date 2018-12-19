import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    ItemPrestationComponent
  ],
  imports: [CommonModule, PrestationsRoutingModule, SharedModule]
})
export class PrestationsModule {}
