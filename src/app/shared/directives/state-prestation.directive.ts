import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { StatePrestation } from '../enums/state-prestation.enum';

@Directive({
  selector: '[appStatePrestation]'
})
export class StatePrestationDirective implements OnChanges {
  @Input() appStatePrestation: StatePrestation;
  @HostBinding('class') nomClass: string;
  constructor() {}

  ngOnChanges() {
    console.log(this.appStatePrestation);
    this.nomClass = this.formatClass(this.appStatePrestation);
  }

  private formatClass(state: StatePrestation): string {
    return `state-${state
      .normalize('NFD')
      .replace(/[\u0300-\u036f\s]/g, '')
      .toLowerCase()}`;
  }
}
