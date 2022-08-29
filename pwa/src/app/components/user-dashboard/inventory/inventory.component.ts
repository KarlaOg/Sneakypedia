import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserInformation, UserInventoriesSneaker } from '../../../models/UserInformation';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory-user-dashboard',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  value: UserInventoriesSneaker | undefined;
  sneakerList: Sneaker[] = [];
  arrayOfInventory: number[] = [];
  arrayOfPrice: number[] = [];
  averageOfSneaker: number = 0;
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
                    this.arrayOfPrice.push(parseInt(value.price))



                  }
                  this.averageOfSneaker = Math.floor(this.arrayOfPrice.reduce((a, b) => a + b, 0) / this.arrayOfPrice.length)

                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
              }

              )
          })

        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })

  }




  getValuetoBeDeleteEvent(event: Event): string {
    this.valueClickedOn =  (event.target as HTMLInputElement).value
    return (event.target as HTMLInputElement).value;
  }

  deleteAction(i: number) {
    // DELETE FROM THE BACKEND 
    console.log(i)
    Object.entries(this.inventoryArrayURI).forEach(
      ([key, valueFetchFromBackend]) => {
        console.log(key)
        this.valueToDeleteInArrayOfInventory = parseInt(valueFetchFromBackend.idSneaker);
        const regexToGetTheIdOfSneaker = /\d+(?!.*\d)/g;
        const getFavId = valueFetchFromBackend["@id"]
        const idSneaker = getFavId.match(regexToGetTheIdOfSneaker)?.join("");
        if (parseInt(valueFetchFromBackend.idSneaker) === parseInt(this.valueClickedOn)) {
          this.inventorySevice.delete(parseInt(idSneaker!)).subscribe({
            next: data => {
              this.deleteMsg = "Suppression reussi";
            },
            error: error => {
              this.deleteMsg = "Il y a une erreur, veuillez ressayer.";
            }
          })
        }
      }
    );

    // DELETE THE IN THE ARRAY TEMPLATE SNEAKER 
    this.sneakerList.forEach((value) => {
      if (value.id === this.valueToDeleteInArrayOfInventory) {
        this.sneakerList.splice(i, 1)

      }
    })
    // DELETE IN THE ARRAY WHERE THE  SNEAKER IS FETCH FROM 
    this.arrayOfInventory.forEach((value, index) => {
      if (value === this.valueToDeleteInArrayOfInventory) {
        this.inventoryArrayURI.splice(index, 1)

      }
    })

  }

}
