import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states = StatePrestation;

  constructor(private ps: PrestationService) {}

  ngOnInit() {}

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
  }
}
