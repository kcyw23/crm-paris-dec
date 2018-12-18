import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent, ItemPrestationComponent],
  imports: [
    CommonModule, PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
