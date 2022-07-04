import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorites } from 'src/app/models/favorites';
import { Sneaker } from 'src/app/models/sneaker';
import { ErrorService } from 'src/app/services/error.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { InventoryService } from 'src/app/services/inventory.service';
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
    public errorService: ErrorService
  ) {

  }

  ngOnInit(): void {
    this.getDetailProducts();
    this.isUserLogIn();
    console.log(this.statusUser)


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
      .subscribe((detailSneaker) => {
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
        return 
        console.log(detailSneaker);
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
    console.log(currentUserFavoris)
    this.favorisService.create(currentUserFavoris)
      .subscribe(
        {
          error: (e) => this.error = e,
        }
      )
  }

  addInventory() {
    this.errorService.handleError
    const idSneaker: number = this.getIdSneakers();
    const idUser = this.userService.decodeToken().id;

    const currentUserInventory: Favorites = {
      'userId': [`/api/users/${idUser.toString()}`],
      'idSneaker': idSneaker.toString()
    }
    console.log(currentUserInventory)
    this.inventoryService.create(currentUserInventory)
      .subscribe(
        {
          error: (e) => this.error = e,
        }
      )
  }

  isUserLogIn(): void {
    this.userService.isLoggedIn.subscribe(
      value => this.statusUser = value
    )
  }






} 
