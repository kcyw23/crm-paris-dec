import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map(data => {
        return data.map(item => {
          return new Prestation(item);
        });
      })
    );
  }

  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection
      .doc(id)
      .set(prestation)
      .catch(e => {
        console.log(e);
      });
    // return this.http.post('urlapi/addprestation', item);
  }

  update(item: Prestation, state?: StatePrestation): Promise<any> {
        const presta = { ...item };
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });
    // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlapi/prestations/get/${id}`);
  }
}
