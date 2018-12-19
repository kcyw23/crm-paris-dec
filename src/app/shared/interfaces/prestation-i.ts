import { StatePrestation } from '../enums/state-prestation.enum';

export interface PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours: number;
  tjmHt: number;
  tauxTva: number;
  state: StatePrestation;
  comment: string;
  totalHt(): number;
  totalTtc(): number;
}
