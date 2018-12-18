import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class PrestationsRoutingModule { }
