import { Component, OnInit, Type } from '@angular/core';
import { map, groupBy, mergeMap, reduce, switchMap } from 'rxjs';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { arrayGroupBy } from 'src/app/utils/grouping_function';


interface Sneakerwise {
  sneakers: {}
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {

  allSneakers: any = [];
  sortedSneakers: any = [];


  constructor(private sneakerService: SneakerService) { }

  ngOnInit(): void {
    this.getSneaker();
  }

  getSneaker() {
    return this.sneakerService.getAll()
    .subscribe(objectOfSneakers => {
      for (const value of Object.values(objectOfSneakers)) {
        this.allSneakers = value
      } 
      console.info(objectOfSneakers)
      return objectOfSneakers
    
    });

  }





}
