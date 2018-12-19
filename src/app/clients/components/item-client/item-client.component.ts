import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  @Input() item: Client;
  public states = StateClient;
  constructor(private cs: ClientService) {}

  public changeState(event) {
    const state = event.target.value;
    this.cs.update(this.item, state);
  }

  ngOnInit() {}
}

