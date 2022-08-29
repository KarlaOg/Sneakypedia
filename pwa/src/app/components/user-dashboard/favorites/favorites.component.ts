import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserFavoritesSneaker } from '../../../models/UserInformation'
import { FavoritesService } from 'src/app/services/favorites.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-favorites',
  // animations: [
  //   trigger('messageDeleted', [
  //     transition(':enter', [
  //       style({ opacity: 1 }),
  //       animate('200ms',),
  //     ]),
  //     transition(':leave', [
  //       animate('100ms', style({ opacity: 0 }))
  //     ])
  //   ]),
  // ],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})


export class FavoritesComponent implements OnInit {

  value: UserFavoritesSneaker | undefined;
  sneakerList: Sneaker[] = [];
  arrayOfFav: number[] = [];
  favArrayURI: UserFavoritesSneaker[] = [];

  sneakerTest: Sneaker | undefined;
  currentItem: string = '';
  valueToBeDeleted: number | undefined;
  valueToDeleteInArrayOfFav!: number;
  deleteMsg: string | undefined;
  valueClickedOn!: string;

  constructor(private userService: UserService, private sneakerService: SneakerService, private favorisService: FavoritesService) { }

  ngOnInit(): void {
    this.getUserInfosFav();
  }

  ngOnChanges() {
    this.arrayOfFav;
    this.sneakerList;
  }

  // ngDoCheck() {
  //   this.arrayOfFav;
  //   this.sneakerList;
  // }
  ngOnDestroy() { }




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


  getValuetoBeDeleteEvent(event: Event): string {
    this.valueClickedOn = (event.target as HTMLInputElement).value;
    // console.log(this.valueClickedOn)
    return (event.target as HTMLInputElement).value;
  }

  deleteAction(i: number) {
    // DELETE FROM THE BACKEND 
    Object.entries(this.favArrayURI).forEach(
      ([key, valueFetchFromBackend]) => {
        console.log(key)
        this.valueToDeleteInArrayOfFav = parseInt(valueFetchFromBackend.idSneaker);
        const regexToGetTheIdOfSneaker = /\d+(?!.*\d)/g;
        const getFavId = valueFetchFromBackend["@id"]
        const idSneaker = getFavId.match(regexToGetTheIdOfSneaker)?.join("");
        if (parseInt(valueFetchFromBackend.idSneaker) === parseInt(this.valueClickedOn)) {
          this.favorisService.delete(parseInt(idSneaker!)).subscribe({
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
      if (value.id === this.valueToDeleteInArrayOfFav) {
        this.sneakerList.splice(i, 1)

      }
    })
    // DELETE IN THE ARRAY WHERE THE  SNEAKER IS FETCH FROM 
    this.arrayOfFav.forEach((value, index) => {
      if (value === this.valueToDeleteInArrayOfFav) {
        this.arrayOfFav.splice(index, 1)

      }
    })



  }


}



