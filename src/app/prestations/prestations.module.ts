import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [PagePrestationsComponent],
  imports: [
    CommonModule, PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
