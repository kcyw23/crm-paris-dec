import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {
  constructor(
    private ps: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  public add(item: Prestation) {
    this.ps.add(item).then(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
    // this.ps.add(item).subscribe((data) => {
    //   this.router.navigate(['../'], { relativeTo: this.route });
    // });
  }
}
