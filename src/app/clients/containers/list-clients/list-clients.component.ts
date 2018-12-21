import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ClientService } from 'src/app/clients/services/client.service';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[] = ['name', 'email', 'state'];

  private sub: Subscription;

  constructor(private cs: ClientService) {}

  ngOnInit() {
    this.collection$ = this.cs.collection$;
  }
}
