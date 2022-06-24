import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorites } from 'src/app/models/favorites';
import { Sneaker } from 'src/app/models/sneaker';
import { ErrorService } from 'src/app/services/error.service';
import { FavoritesService } from 'src/app/services/favorites.service';
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

    detailsItem: {
      id: number;
      label: string;
      image: string;
      release_date: string;
      description: string;
      price: number;
    } = {
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
          return (this.detailsItem = value);
        }
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

  isUserLogIn(): void {
    this.userService.isLoggedIn.subscribe(
      value => this.statusUser = value
    )
  }






} 
