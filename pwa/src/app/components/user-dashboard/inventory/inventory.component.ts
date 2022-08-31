import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserInformation, UserInventoriesSneaker } from '../../../models/UserInformation';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-inventory-user-dashboard',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  value: UserInventoriesSneaker | undefined;
  sneakerList: Sneaker[] = [];
  arrayOfInventory: number[] = [];
  arrayOfPrice: Sneaker[] = [];
  averageOfSneaker: number = 0;
  averagePriceSneaker: number = 0;
  inventoryArrayURI: UserInventoriesSneaker[] = [];
  currentItem: string = '';
  sneakerTest: Sneaker | undefined;
  valueClickedOn!: string;
  deleteMsg: string | undefined;
  valueToDeleteInArrayOfInventory!: number;

  constructor(private userService: UserService, private sneakerService: SneakerService, private inventorySevice: InventoryService) { }

  ngOnInit(): void {
    this.getUserInfosInventory();
  }

  ngOnChanges() {
    this.arrayOfInventory;
    this.sneakerTest;
    this.arrayOfPrice;
    this.averageOfSneaker;
  }



  getUserInfosInventory() {
    const idUser = this.userService.decodeToken().id;
    return this.userService.getUserInventory(idUser)
      .subscribe({
        next: (v) => {
          Object.entries(v).forEach(
            ([key, value]) => {
              this.arrayOfInventory.push(parseInt(value.idSneaker))
              this.inventoryArrayURI.push(value)
            },
          );
          this.arrayOfInventory.forEach(val => {
            return this.sneakerService
              .get(val)
              .subscribe({
                next: (sneakerItem) => {
                  for (const value of Object.values(sneakerItem)) {
                    this.sneakerList.push(value);
                    this.arrayOfPrice.push(value);
                  }
                  const result = this.arrayOfPrice.reduce(function (acc, obj) {
                    return acc + Math.floor(obj.price);
                  }, 0) / this.arrayOfPrice.length
                  this.averageOfSneaker = Math.floor(result)
                },
                error: (e) => console.error(e),
                complete: () => console.info('fetch user complete')
              })
          })
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  }




  getValuetoBeDeleteEvent(event: Event): string {
    this.valueClickedOn = (event.target as HTMLInputElement).value
    return (event.target as HTMLInputElement).value;
  }

  deleteAction(i: number) {

    let nameOfTheSneakerDelete: string | undefined;
    Object.entries(this.inventoryArrayURI).forEach(
      ([key, valueFetchFromBackend]) => {
        this.valueToDeleteInArrayOfInventory = parseInt(valueFetchFromBackend.idSneaker);
      /* 
        Example:   api/favorites/54 
        I need to get the last part of it. 
      */
        const regexToGetTheIdOfSneaker = /\d+(?!.*\d)/g;
        const getFavId = valueFetchFromBackend["@id"]
        const idSneaker = getFavId.match(regexToGetTheIdOfSneaker)?.join("");
        this.arrayOfPrice.forEach((value, index) => {
          if (value.id === this.valueToDeleteInArrayOfInventory) {
            this.arrayOfPrice.splice(index, 1)
            const result = this.arrayOfPrice.reduce(function (acc, obj) {
              return acc + Math.floor(obj.price);
            }, 0) / this.arrayOfPrice.length
            return this.averageOfSneaker = Math.floor(result)
          }
          return
        })
        if (parseInt(valueFetchFromBackend.idSneaker) === parseInt(this.valueClickedOn)) {
          // DELETE IN THE TEMPLATE
          this.sneakerList.forEach((value) => {
            if (value.id === this.valueToDeleteInArrayOfInventory) {
              nameOfTheSneakerDelete = value.label
              this.deleteMsg = `Suppresion de la sneaker ${value.label}`;
              return this.sneakerList.splice(i, 1)
            }
            return
          })
          // DELETE BACKEND 
          this.inventorySevice.delete(parseInt(idSneaker!)).subscribe({
            error: error => {
              this.deleteMsg = `Il y a eu une erreur avec la suppresion de la sneaker ${nameOfTheSneakerDelete}`;
              console.error(error)
            },
            complete: () => {
              this.deleteMsg = this.deleteMsg;
              console.log("completed deletion")
            }
          })
        }
      }
    );
  }
}
