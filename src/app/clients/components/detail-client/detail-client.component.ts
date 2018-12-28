import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {
  public client$: BehaviorSubject<Client>;
  constructor(private cs: ClientService) {}

  ngOnInit() {
    this.client$ = this.cs.client$;
  }
}
