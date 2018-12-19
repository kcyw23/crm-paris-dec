import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestations';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
  }

  public get collection(): Prestation[] {
    return this._collection;
  }

  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  public update(item: Prestation, state: StatePrestation) {
    item.state = state;
  }

  public add(item: Prestation) {}
}
