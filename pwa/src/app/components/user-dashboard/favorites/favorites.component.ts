import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserFavoritesSneaker } from '../../../models/UserInformation'
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-favorites',
  animations: [
    trigger('fadeInAndOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])

    ])
  ],
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

  showEvents = true
  
  constructor(private userService: UserService, private sneakerService: SneakerService, private favorisService: FavoritesService) { }

  ngOnInit(): void {
    this.getUserInfosFav();
  }

  ngOnChanges() {
    this.arrayOfFav;
    this.sneakerList;
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


  getValuetoBeDeleteEvent(event: Event): string {
    this.valueClickedOn = (event.target as HTMLInputElement).value;
    return (event.target as HTMLInputElement).value;
  }

  deleteAction(i: number) {

    let nameOfTheSneakerDelete: string | undefined;
    Object.entries(this.favArrayURI).forEach(
      ([key, valueFetchFromBackend]) => {
        console.log(key)
        this.valueToDeleteInArrayOfFav = parseInt(valueFetchFromBackend.idSneaker);
        const regexToGetTheIdOfSneaker = /\d+(?!.*\d)/g;
        const getFavId = valueFetchFromBackend["@id"]
        const idSneaker = getFavId.match(regexToGetTheIdOfSneaker)?.join("");
        if (parseInt(valueFetchFromBackend.idSneaker) === parseInt(this.valueClickedOn)) {
          // DELETE THE IN THE ARRAY TEMPLATE SNEAKER 
          this.sneakerList.forEach((value) => {
            nameOfTheSneakerDelete = value.label
            if (value.id === this.valueToDeleteInArrayOfFav) {
              this.deleteMsg = `Suppresion de la sneaker ${value.label}`;
              return this.sneakerList.splice(i, 1)

            }
            return
          })
          // DELETE FROM THE BACKEND 
          this.favorisService.delete(parseInt(idSneaker!)).subscribe({
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



