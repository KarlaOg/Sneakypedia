import { Component, OnInit, Type } from '@angular/core';
import { map, groupBy, mergeMap, reduce, switchMap, retry } from 'rxjs';
import { Sneaker, SneakerList, sortedSneakerList } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { arrayGroupBy } from 'src/app/utils/grouping_function';
import * as moment from "moment";

interface Sneakerwise {
  sneakers: {}
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {

  allSneakers: Sneaker[] = [];
  sortedSneakers: any = [];
  list: Sneaker[] = [];

  constructor(private sneakerService: SneakerService) { }

  ngOnInit(): void {
    this.getSneaker();
  }

  getSneaker() {
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


}
