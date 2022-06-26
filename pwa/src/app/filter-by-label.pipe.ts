import { Pipe, PipeTransform } from '@angular/core';
<<<<<<< HEAD
import { Sneaker } from './models/sneaker'
=======
import {Sneaker} from './models/sneaker'
>>>>>>> b3775c0246ce93907394adeb22dfaf1fb61cce5e
import { SneakerService } from './services/sneaker/sneaker.service';
@Pipe({
  name: 'filterByLabel'
})
export class FilterByLabelPipe implements PipeTransform {
<<<<<<< HEAD

  constructor(private sneakerService: SneakerService) {

  }
  private sneakersByLabel: Sneaker[] = []
  // private sneakerService!: SneakerService;

  transform(allSneakers: Sneaker[], filterText: string): any {
    this.sneakerService.findByTitle(filterText)
      .subscribe(objectOfSneakers => {
        console.log(objectOfSneakers)
        // for (const value of Object.values(objectOfSneakers)) {
        //   return this.sneakersByLabel = value
        // }
        // console.info(this.sneakersByLabel)
        // return objectOfSneakers
      });
=======
  private sneakersByLabel:  Sneaker[] = []
  private sneakerService!: SneakerService;

  transform(allSneakers: Sneaker[], filterText: string): any {
     this.sneakerService.findByTitle(filterText)
     .subscribe(objectOfSneakers => {
      for (const value of Object.values(objectOfSneakers)) {
        console.log(value)
        return this.sneakersByLabel = value
      } 
      console.info(this.sneakersByLabel)
      return objectOfSneakers
    });
>>>>>>> b3775c0246ce93907394adeb22dfaf1fb61cce5e
  }

}