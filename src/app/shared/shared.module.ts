import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplatesModule } from '../templates/templates.module';
import { AddRowComponent } from './components/add-row/add-row.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateClientDirective } from './directives/state-client.directive';
import { StatePrestationDirective } from './directives/state-prestation.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [
    TotalPipe,
    StatePrestationDirective,
    TableauComponent,
    AddRowComponent,
    StateClientDirective
  ],
  exports: [
    TotalPipe,
    StatePrestationDirective,
    TableauComponent,
    AddRowComponent,
    StateClientDirective,
    TemplatesModule
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, TemplatesModule]
})
export class SharedModule {}
