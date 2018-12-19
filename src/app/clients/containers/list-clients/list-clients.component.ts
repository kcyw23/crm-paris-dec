import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/clients/services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[] = ['name', 'email', 'state'];
  constructor(private cs: ClientService) {}

  ngOnInit() {
    this.collection = this.cs.collection;
  }
}
