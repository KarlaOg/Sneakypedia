import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';

@Component({
  selector: 'app-sneaker-details',
  templateUrl: './sneaker-details.component.html',
  styleUrls: ['./sneaker-details.component.css']
})
export class SneakerDetailsComponent implements OnInit {
  id: number | undefined;
  private sub: any;
  protected details: Sneaker[] = [];
  constructor(private sneakerService: SneakerService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getDetailProducts();

  }

  getIdSneakers(): number {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here
    });

    return this.id !== undefined ? this.id : 0;
  }

  getDetailProducts() {
    return this.sneakerService.get(this.getIdSneakers())
      .subscribe(detailSneaker => console.log(detailSneaker))
  }

}
