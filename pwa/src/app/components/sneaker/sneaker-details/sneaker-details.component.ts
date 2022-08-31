import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Favorites } from 'src/app/models/favorites';
import { Inventory } from 'src/app/models/inventory';
import { Sneaker } from 'src/app/models/sneaker';
import { ErrorService } from 'src/app/services/common/error.service';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sneaker-details',
  templateUrl: './sneaker-details.component.html',
  styleUrls: ['./sneaker-details.component.css'],
})
export class SneakerDetailsComponent implements OnInit {
  id: number | undefined;
  private sub: any;
  statusUser: boolean | undefined;
  sneakerAddedFav: boolean = false;
  sneakerAddedInventory: boolean = false;
  messageSneaker: string = '';


  detailsItem: Sneaker = {
    id: 0,
    label: '',
    image: '',
    release_date: '',
    description: '',
    price: 0,
  };
  error!: [];
  constructor(
    private sneakerService: SneakerService,
    private route: ActivatedRoute,
    private favorisService: FavoritesService,
    private inventoryService: InventoryService,
    private userService: UserService,
    public errorService: ErrorService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getDetailProducts();
    this.isUserLogIn();
    this.checkIfFav();
    this.checkIfInInventory();

  }

  ngOnChanges() {

  }

  getIdSneakers(): number {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    return this.id !== undefined ? this.id : 0;
  }

  getDetailProducts() {
    return this.sneakerService
      .get(this.getIdSneakers())
      .subscribe({
        next: (detailSneaker) => {
          for (const value of Object.values(detailSneaker)) {
            return (this.detailsItem = {
              id: value.id,
              description: value.description,
              label: value.label,
              image: value.image,
              price: value.price,
              release_date: value.release_date,
            });
          }
          this.messageSneaker = "Paire ajouter"
          return
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')

      });
  }





  addFavoris() {
    this.errorService.handleError
    const idSneaker: number = this.getIdSneakers();
    const idUser = this.userService.decodeToken().id;

    const currentUserFavoris: Favorites = {
      'userId': [`/api/users/${idUser.toString()}`],
      'idSneaker': idSneaker.toString()
    }
    this.favorisService.create(currentUserFavoris)
      .subscribe(
        {
          error: (e) => this.error = e,
          complete: () => this.router.navigateByUrl("/compte/favoris"),
        }
      )
  }

  addInventory() {
    this.errorService.handleError
    const idSneaker: number = this.getIdSneakers();
    const idUser = this.userService.decodeToken().id;

    const currentUserInventory: Inventory = {
      'idUser': [`/api/users/${idUser.toString()}`],
      'idSneaker': idSneaker.toString()
    }
    this.inventoryService.create(currentUserInventory)
      .subscribe(
        {
          error: (e) => this.error = e,
          complete: () => this.router.navigateByUrl("/compte/inventaire"),
        }
      )
  }

  isUserLogIn(): void {
    this.userService.isLoggedIn.subscribe(
      value => this.statusUser = value
    )
  }

  checkIfFav() {
    if (this.statusUser === true) {
      const idUser = this.userService.decodeToken().id;
      this.userService
        .getUserFavoris(idUser)
        .subscribe({
          next: (item) => {
            for (const value of Object.values(item)) {
              if (parseInt(value.idSneaker) === this.id) {
                return this.sneakerAddedFav = true
              }
            }
            return this.sneakerAddedFav
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        })
    }
    return

  }

  checkIfInInventory() {
    if (this.statusUser === true) {
      const idUser = this.userService.decodeToken().id;
      this.userService
        .getUserInventory(idUser)
        .subscribe({
          next: (listOfItem) => {
            for (const value of Object.values(listOfItem)) {
              if (parseInt(value.idSneaker) === this.id) {
                return this.sneakerAddedInventory = true
              }
            }
            return this.sneakerAddedInventory

          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        })

    }
    return 
  }





} 