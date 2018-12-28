import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  constructor(
    private cs: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  public add(item: Client) {
    this.cs.add(item).then(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
