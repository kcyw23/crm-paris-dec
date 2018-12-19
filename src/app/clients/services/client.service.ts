import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection: Client[];

  constructor() {
    this.collection = fakeClients;
  }

  public get collection(): Client[] {
    return this._collection;
  }

  public set collection(col: Client[]) {
    this._collection = col;
  }

  update(item: Client, state: StateClient) {
    item.state = state;
  }
}
