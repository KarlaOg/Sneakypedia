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
        <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {{ detailsItem.label }}
            </h1>
            <p class="text-3xl text-gray-900">{{ detailsItem.price }}€</p>
          </div>
          <!-- Options -->
          <div class="mt-4 lg:mt-0 lg:row-span-3">
            <h2 class="sr-only">Product information</h2>
            <button
              (click)="addFavoris()"
              type="submit"
              class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              Favoris
            </button>
            <button type="submit" class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" >
              Mes sneakers
            </button>

            <a routerLink="/sneaker/add" 
              type="submit"
              class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              Ajouter une paire 
            </a>
          </div>

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
              <h3 class="sr-only">Description</h3>
              <h2 class="text-base font-medium text-gray-900">
                Date de sortie
              </h2>
              <p class="text-base text-gray-600">
                {{ detailsItem.description }}
              </p>
              <div class="space-y-6">
                <p class="text-base text-gray-900"></p>
              </div>
            </div>

            <div class="mt-10">
              <h2 class="text-base font-medium text-gray-900">Details</h2>

              <div class="mt-4 space-y-6">
                <p class="text-sm text-gray-600"></p>
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
  detailsItem: {
    id: number;
    label: string;
    image: string;
    description: string;
    price: number;
  } = {
      id: 0,
      label: '',
      image: '',
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
  ) { }

  ngOnInit(): void {
    this.getDetailProducts();
  }

  getIdSneakers(): number {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here
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

  addFavoris()  {
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

 


} 
