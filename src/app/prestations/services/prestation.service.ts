import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestation } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];

  constructor() {
    this.collection = fakePrestation;
  }

  public get collection(): Prestation[] {
    return this._collection;
  }

  public set collection(col: Prestation[])  {
    this._collection = col;
  }
}
