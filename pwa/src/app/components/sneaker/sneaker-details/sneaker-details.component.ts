import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';

@Component({
  selector: 'app-sneaker-details',
  template: `
    <div class="bg-white pt-16">
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
              type="submit"
              class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              Favoris
            </button>
            <button type="submit" class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
              Mes sneakers
            </button>

            <button
              type="submit"
              class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              Ajouter une paire 
            </button>
          </div>

          <div class=" py-0lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

            <div class="mt-6 max-w-2xl mx-auto lg:max-w-7xl lg:gap-x-8 py-6">
              <div
                class="hidden aspect-w-3 aspect-h-4 overflow-hidden lg:block"
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
  constructor(
    private sneakerService: SneakerService,
    private route: ActivatedRoute
  ) {}

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

  addFavoris(){
    const id : number = this.getIdSneakers(); 
  }
}
