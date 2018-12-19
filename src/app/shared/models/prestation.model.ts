import { PrestationI } from '../interfaces/prestation-i';
import { StatePrestation } from '../enums/state-prestation.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours = 0;
  tjmHt = 500;
  tauxTva = 20;
  state = StatePrestation.OPTION;
  comment: string;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }

  totalTtc(tva?: number): number {
    if (!tva) {
      return this.totalHt() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + tva / 100);
  }
}
