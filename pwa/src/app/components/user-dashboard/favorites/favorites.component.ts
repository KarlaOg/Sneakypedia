import { Component, OnInit } from '@angular/core';
import { elementAt, map, of } from 'rxjs';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserInformation, UserFavoritesSneaker, UpdatedFavoris } from '../../../models/UserInformation'
import { FavoritesService } from 'src/app/services/favorites.service';


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



  // updatedFav : UpdatedFavoris = "favorites"[]; 

  value: UserFavoritesSneaker | undefined;
  sneakerList: Sneaker[] = [];
  arrayOfFav: number[] = [];
  favArrayURI: UserFavoritesSneaker[] = [];

  sneakerTest: Sneaker | undefined;
  currentItem: string = '';



  constructor(private userService: UserService, private sneakerService: SneakerService, private favorisService: FavoritesService) { }

  ngOnInit(): void {
    this.getUserInfosFav();
  }

  ngOnChange() {
    this.arrayOfFav;
  }



  getUserInfosFav() {
    const idUser = this.userService.decodeToken().id;
    return this.userService.getUserFavoris(idUser)
      .subscribe({
        next: (v) => {

          Object.entries(v).forEach(
            ([key, value]) => {
              this.arrayOfFav.push(parseInt(value.idSneaker))
              this.favArrayURI.push(value)
            },

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


  myClickFunction(event: MouseEvent) {
    console.log(event)
  }

  getValueToDelete(event: Event): string {
    const valueClickedOn = (event.target as HTMLInputElement).value
    Object.entries(this.favArrayURI).forEach(
      ([key, value]) => {
        const regex = /(\d+)/g;
        console.log(key, value["@id"])
        const getFavId = value["@id"]
        const result = getFavId.match(regex)
        // 
        if (parseInt(value.idSneaker) === parseInt(valueClickedOn)) {
          console.log(value.idSneaker, valueClickedOn)
          console.log(result![0])
          console.log(result!)
          this.favorisService.delete(parseInt(result![0])).subscribe({
            error: (e) => console.error(e),
            complete: () => console.info('deleted')
          })

        }
      }
    );
    return (event.target as HTMLInputElement).value;
  }
}