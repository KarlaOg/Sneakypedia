import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';

@Component({
  selector: 'app-sneaker-add',
  template: `
  <div class=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  <form (ngSubmit)="addSneaker(f)" #f="ngForm" class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Ajout d'une Sneaker
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
          </p>
        </div>

        <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5" ngModelGroup="addSneakerData">
          <div class="form-group sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Nom de la sneaker
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex">
              <span class="text-xs pb-2 text-zinc-500" *ngIf="!label.valid && label.touched">Veuillez entrer un nom de sneaker.</span>
              </div>
              <div class="max-w-lg flex rounded-md shadow-sm">
                <input type="text" name="label" id="name" required class="form-control rounded-md  flex-1 block w-full focus:ring-orange-600 focus:border-orange-600 min-w-0  sm:text-sm border-gray-300" ngModel #label="ngModel">
              </div>
            </div>
          </div>

          <div class="form-group sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="price" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Prix
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex">
              <span class="text-xs pb-2 text-zinc-500" *ngIf="!price.valid && price.touched">Veuillez entrer un prix.</span>
              </div>
              <div class="max-w-lg flex rounded-md shadow-sm">
                <input type="number" name="price" id="price" required class="form-control rounded-md  flex-1 block w-full focus:ring-orange-600 focus:border-orange-600 min-w-0  sm:text-sm border-gray-300" ngModel #price="ngModel">
              </div>
              
            </div>
          </div>

          <div class="form-group sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="date" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Date de sortie 
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex">
                  <span class="text-xs pb-2 text-zinc-500" *ngIf="!description.valid && description.touched">Veuillez entrer une date valide.</span>
                </div>
              <div class="max-w-lg flex rounded-md shadow-sm">
                <input type="date" name="description" id="date"  required class="form-control rounded-md  flex-1 block w-full focus:ring-orange-600 focus:border-orange-600 min-w-0  sm:text-sm border-gray-300" ngModel #description="ngModel">
              </div>
              
            </div>
          </div>

          <!-- <div class="form-group sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="details" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Détails
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea name="details" id="details" cols="30" rows="10"  required class=" form-control rounded-md  flex-1 block w-full focus:ring-orange-600 focus:border-orange-600 min-w-0  sm:text-sm border-gray-300" ngModel ></textarea>
              </div>
            </div>
          </div> -->

          <div class="form-group sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="cover_photo" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Photo
            </label>
            <div class="mt-2 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="image" class="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-600">
                      <span>Télécharger un fichier</span>
                      <input id="image" name="image" type="file" class="sr-only" ngModel>
                    </label>
                    <p class="pl-1">ou glisser-déposer</p>
                  </div>
                  <p class="text-xs text-gray-500">
                     JPG jusqu'à 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600">
          Annuler
        </button>
        <button [disabled]="!f.valid" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600">
          Enregistrer
        </button>
      </div>
    </div>
  </form>
  </div>
  `,
  styleUrls: ['./sneaker-add.component.css']
})
export class SneakerAddComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder,
    private sneakerService: SneakerService) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      detail: ['', Validators.required],
      photos: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  addSneaker(form: NgForm) {
    console.log(form.value)
    const addingSneakerItem: Sneaker = form.value
    const finalObj = {
      "sneaker":{
        addingSneakerItem
      }
    }
    // this.sneakerService.create(finalObj.sneaker)
    //   .subscribe({
    //     complete: () => console.info("Adding sneaker Completed"),
    //     next: () => ''
    //   })
  }

}
