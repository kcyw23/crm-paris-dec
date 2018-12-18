import { State } from '../enums/state.enum';

export interface PrestationI {
  typePresta: string;
  client: string;
  nbJours: number;
  tjmHt: number;
  tauxTva: number;
  state: State;
  comment: string;
  totalHt(): number;
  totalTtc(): number;
}
