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




  getValueToDelete(event: Event): string {
    const valueClickedOn = (event.target as HTMLInputElement).value
    Object.entries(this.inventoryArrayURI).forEach(
      ([key, value]) => {
        console.log(value)
        const regex = /(\d+)/g;
        // console.log(key , value["@id"])
        const getFavId = value["@id"]
        const result = getFavId.match(regex)
        
        if (parseInt(value.idSneaker) === parseInt(valueClickedOn)) {
          console.log(value.idSneaker, valueClickedOn)
          console.log(result![0])
          this.inventorySevice.delete(parseInt(result![0])).subscribe({

          })

        }
      }
    );
    return (event.target as HTMLInputElement).value;
  }
}
