import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;
  public presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map(data => {
        this.presta$.next(data[0] ? new Prestation(data[0]) : null);
        return data.map(item => {
          return new Prestation(item);
        });
      })
    );
    // this.collection$ = this.http
    //   .get<Prestation[]>(`${URL_API}/prestations`)
    //   .pipe(
    //     map(data => {
    //       return data.map(item => {
    //         return new Prestation(item);
    //       });
    //     })
    //   );
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
    // return this.http.post(`${URL_API}/prestations`, item);
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
    // return this.http.patch(`${URL_API}/prestations`, item);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`${URL_API}/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.getPrestation(`${URL_API}/prestations/${id}`);
  }
}
