
import { Component, Input, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
@Component({
  selector: 'app-sneakers-list',
  templateUrl: 'sneakers-list.component.html',
  styleUrls: ['./sneakers-list.component.css']
})
export class SneakersListComponent implements OnInit {
  @Input() label = '';

  allSneakers: Sneaker[] = [];
  sneakers: Sneaker[] = [];
  homeData: string = "";
  @Input() item = '';


  constructor(private sneakerService: SneakerService) { }

  ngOnInit(): void {
    this.getAllSneakerList();

  }
  ngOnChanges() {
    this.searchSneaker();
  }



  getAllSneakerList() {
    return this.sneakerService.getAll()
      .subscribe({
        next: (objectOfSneakers) => {
          for (const value of Object.values(objectOfSneakers)) {
            this.allSneakers = value
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }

  searchSneaker() {
    return this.sneakerService.findByTitle(this.item)
      .subscribe({
        next: (objectOfSneakers) => {
          for (const value of Object.values(objectOfSneakers)) {
            return this.allSneakers = value
          }
        },

        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });

  }




}


