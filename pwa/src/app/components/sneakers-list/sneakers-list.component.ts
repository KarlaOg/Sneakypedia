import { Component, Input, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
@Component({
  selector: 'app-sneakers-list',
  template: `
<div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>
      
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" class="group" *ngFor="let item of allSneakers | filterByLabel: label">
          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src='{{item.image}}' alt="Images of different sneakers" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt- 4 text-sm text-gray-700"> {{item.label}}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900"> {{item.price}}</p>
        </a>
       

       </div>
    </div>
  </div> 
  `,
  styleUrls: ['./sneakers-list.component.css']
})
export class SneakersListComponent implements OnInit {
  @Input() label = '';

  allSneakers: Sneaker[] = [];
  sneakers: Sneaker[] = [];

  constructor(private sneakerService: SneakerService) { }

  ngOnInit(): void {
    this.getAllSneakerList();
  }

  getAllSneakerList() {
    return this.sneakerService.getAll()
      .subscribe(objectOfSneakers => {
        for (const value of Object.values(objectOfSneakers)) {
          return this.allSneakers = value
        } 
        console.info(this.allSneakers)
        return objectOfSneakers
      
      });
  }

}