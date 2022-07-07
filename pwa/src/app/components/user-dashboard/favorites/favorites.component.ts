import { Component, OnInit } from '@angular/core';
import { elementAt, map, of } from 'rxjs';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserInformation, UserFavoritesSneaker } from '../../../models/UserInformation'


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})


export class FavoritesComponent implements OnInit {

  test: UserInformation = {
    "@context": "",
    "@id": "",
    "@type": "",
    "email": "",
    "favorites": [],
    "firstname": "",
    "inventories": [],
    "lastname": "",
  };


  value: UserFavoritesSneaker | undefined;
  sneakerList: Sneaker[] = [];
  arrayOfFav: number[] = [];

  sneakerTest: Sneaker | undefined;
  currentItem: string = '';


  constructor(private userService: UserService, private sneakerService: SneakerService) { }

  ngOnInit(): void {
    this.getUserInfosFav();
    this.getIdSneaker();
  }




  getUserInfosFav() {
    const idUser = this.userService.decodeToken().id;
    return this.userService.getUserFavoris(idUser)
      .subscribe({
        next: (v) => {

          Object.entries(v).forEach(
            ([key, value]) => this.arrayOfFav.push(parseInt(value.idSneaker)),

          );
          this.arrayOfFav.forEach(val => {
            return this.sneakerService
              .get(val)
              .subscribe((sneakerItem) => {
                for (const value of Object.values(sneakerItem)) {
                  this.sneakerList.push(value);

                }
              })
          })

        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })

  }

  deleteFav() {
    const idUser = this.userService.decodeToken().id;
    this.userService.updateUserAccount(idUser)

  }

  getIdSneaker(): void {
    console.log(this.sneakerList)
    // const idUser = this.userService.decodeToken().id;
    // this.userService.updateUserAccount(idUser,)
  }

  myClickFunction(event: MouseEvent) {
    console.log(event)
  }

  getValue(event: Event): string {
    const idUser = this.userService.decodeToken().id;
    console.log((event.target as HTMLInputElement).value)
    const valueClickedOn = (event.target as HTMLInputElement).value



    Object.entries(this.sneakerList).forEach(
      ([key, value]) => {
        if (value.id === parseInt(valueClickedOn)) {
          console.log(value, key)
          this.sneakerList.splice(1, parseInt(key))
        }
      }
    );
    // this.userService.updateUserAccount(this.sneakerList)



    return (event.target as HTMLInputElement).value;
  }
}