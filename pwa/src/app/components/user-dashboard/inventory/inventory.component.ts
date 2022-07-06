import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserInformation, UserFavoritesSneaker } from '../../../models/UserInformation'

@Component({
  selector: 'app-inventory-user-dashboard',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  value: UserFavoritesSneaker | undefined;
  sneakerList: Sneaker[] = [];
  arrayOfInventory: number[] = [];
  arrayOfPrice: number[] = [];
  averageOfSneaker: number = 0;

  sneakerTest: Sneaker | undefined;
  constructor(private userService: UserService, private sneakerService: SneakerService) { }

  ngOnInit(): void {
    this.getUserInfosInventory();
  }



  getUserInfosInventory() {
    const idUser = this.userService.decodeToken().id;
    return this.userService.getUserInventory(idUser)
      .subscribe({
        next: (v) => {

          Object.entries(v).forEach(
            ([key, value]) => this.arrayOfInventory.push(parseInt(value.idSneaker)),

          );
          this.arrayOfInventory.forEach(val => {
            return this.sneakerService
              .get(val)
              .subscribe((sneakerItem) => {
                for (const value of Object.values(sneakerItem)) {
                  this.sneakerList.push(value);
                  this.arrayOfPrice.push(parseInt(value.price))


                }
                this.averageOfSneaker = Math.floor(this.arrayOfPrice.reduce((a, b) => a + b, 0) / this.arrayOfPrice.length)


              })
          })

        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })

  }
}
