import { Component, Input, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states = StatePrestation;
  public faTrashAlt = faTrashAlt;
  constructor(private ps: PrestationService) {}

  ngOnInit() {}

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then(() => {
      // traiter reponse api
    });
    // this.ps.update(this.item, state).subscribe((data) => {
    //   // traiter reponse api
    // });
  }

  public delete() {
    this.ps.delete(this.item).then(data => {
      // gérer réponse de l'api
    });
    // this.ps.delete(this.item).subscribe((data) => {
    //   // gérer réponse de l'api
    // });
  }

  public detail() {
    this.ps.presta$.next(this.item);
    console.log(this.ps.presta$.value);
  }
}
