import { Pipe, PipeTransform } from '@angular/core';
import { Sneaker } from './models/sneaker'
import { SneakerService } from './services/sneaker/sneaker.service';
@Pipe({
  name: 'filterByLabel'
})
export class FilterByLabelPipe implements PipeTransform {

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
  }

}