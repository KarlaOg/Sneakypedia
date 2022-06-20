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
  template: `
    <div class="bg-white pt-16">
    <div *ngIf="error"class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
       {{ this.errorService.handleError}}
      </div>
      <div>
        <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 grid lg:grid-cols-2  lg:gap-x-8">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {{ detailsItem.label }}
            </h1>
            <p class="text-3xl text-gray-900">{{ detailsItem.price }}€</p>
          </div>
          <!-- Options -->
          

          <div class=" py-0lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

            <div class="mt-6 max-w-2xl mx-auto lg:max-w-7xl lg:gap-x-8 py-6">
              <div
                class=" aspect-w-3 aspect-h-4 overflow-hidden lg:block"
              >
                <img
                  src="{{ detailsItem.image }}"
                  alt="Image of sneakers"
                  class="w-3/5 rounded-md object-center object-cover"
                />
              </div>
            </div>
            <div>
              <h3 class="sr-only"> Date de sortie</h3>
              <h2 class="text-xl font-medium text-gray-900">
                Date de sortie
              </h2>
              <p class="text-base text-gray-600">
                {{ detailsItem.release_date }}
              </p>
              <div class="space-y-6">
                <p class="text-base text-gray-900"></p>
              </div>
            </div>

            <div class="mt-10">
              <h2 class="text-xl font-medium text-gray-900">Description</h2>
              <div *ngIf="detailsItem.description.length === 0 &&  this.statusUser === false " else showDescription class="mt-4 space-y-6">
              <p class="text-xl font-semibold italic  text-gray-600">
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                <span class="relative text-white">
                <a  routerLink="/connexion"> Connectez-vous</a> 
              </span>
                </span>
              
              pour intéragir avec cette paire de SNEAKER ! 
                </p>
                <div>
                <div class="mt-4 lg:mt-0 lg:row-span-3">
              <h2 class="sr-only">Product information</h2>
            
            <button 
              [disabled]="this.statusUser === false"
              (click)="addFavoris()"
              type="submit" 
              class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  disabled:opacity-75"
            >
              Favoris
            </button>
       

            <button 
              [disabled]="this.statusUser === false"
              routerLink="/sneaker/add" 
              type="submit"
              class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  disabled:opacity-75"
            >
              Ajouter une paire 
            </button>
          
          </div>
                </div>
                <p #showDescription class="text-base text-gray-600">
                {{detailsItem.description}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
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
      'userId': `users/${idUser.toString()}`,
      'idSneaker': idSneaker.toString()
    }
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
