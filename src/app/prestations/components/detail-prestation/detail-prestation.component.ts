import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-detail-prestation',
  templateUrl: './detail-prestation.component.html',
  styleUrls: ['./detail-prestation.component.scss']
})
export class DetailPrestationComponent implements OnInit {
  public presta$: BehaviorSubject<Prestation>;
  constructor(private ps: PrestationService) {}

  ngOnInit() {
    this.presta$ = this.ps.presta$;
  }
}
