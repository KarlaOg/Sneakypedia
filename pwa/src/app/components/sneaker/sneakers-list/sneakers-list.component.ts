
import { Component, Input, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
@Component({
  selector: 'app-sneakers-list',
  templateUrl: 'sneakers-list.component.html',
  styleUrls: ['./sneakers-list.component.css']
})
export class SneakersListComponent implements OnInit {

  allSneakers: Sneaker[] = [];
  sneakers: Sneaker[] = [];
  homeData: string = "";
  list: Sneaker[] = [];
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
          this.allSneakers = value;

        }

        this.list = this.allSneakers.slice().sort(function (a, b) {
          const regex = /\./g
          const currentYear = new Date().getFullYear().toString();
          
          const aTransformStringDate = a.release_date.replace(regex, "-").concat(`${- currentYear}`).split("-").reverse().join("-");
          const bTransformStringDate = b.release_date.replace(regex, "-").concat(`${- currentYear}`).split("-").reverse().join("-");
          const dateA = new Date(aTransformStringDate);
          const dateB = new Date(bTransformStringDate);
          return dateB > dateA ? 1 : -1
        })

      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  searchSneaker() {
    if (this.item !== undefined) {
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
    } else {
      return this.allSneakers
    }


  }




}


