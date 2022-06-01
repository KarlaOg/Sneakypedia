import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account',
  template: `
  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
   <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form [formGroup]="updateAccount"  method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Votre profile
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Ces informations seront visible publiquement faites attention à se que vous partagez.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-6">
            <div class="col-span-3 sm:col-span-2">
              <label
                for="company_website"
                class="block text-sm font-medium text-gray-700"
              >
                Nom d'utilisateur
              </label>
              <div class="mt-1 rounded-md shadow-sm flex">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="username"
                  class="form-control appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  formControlName="username"
                />
              </div>
            </div>

          
            <div class="col-span-2 sm:col-span-3">
              <label
                for="last_name"
                class="block text-sm font-medium text-gray-700"
                >Nom</label
              >
              <input
                type="text"
                name="last_name"
                id="last_name"
                autocomplete="family-name"
                class="form-control appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"  formControlName="lastname"                 />
            </div>
            <div class="col-span-2 sm:col-span-3">
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-700"
                >Prénom</label
              >
              <input
                type="text"
                name="first_name"
                id="first_name"
                autocomplete="given-name"
                class="form-control appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"       formControlName="firstname"            />
            </div>

            <!-- <div class="col-span-3 sm:col-span-2">
              <label
                for="email_address"
                class="block text-sm font-medium text-gray-700"
                >Addresse mail </label
              >
              <input
                type="text"
                name="email_address"
                id="email_address"
                autocomplete="email"
                class="form-control appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"                  />
            </div> -->

           
            <div class="col-span-3">
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span
                  class="inline-block bg-gray-100 rounded-full overflow-hidden h-12 w-12"
                >
                  <svg
                    class="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </span>
                <button
                  type="button"
                  class="ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Changer
                </button>
              </div>
            </div>

           
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex  justify-between flex-row items-center ">
        <a  (click)="open()"
            type="submit"
            class="text-xs font-medium text-orange-600 hover:text-orange-400  underline underline-offset-4 "
            
          >
            Supprimer mon compte
          </a>
          <button (click)="updateProfil()"
            type="submit"
            class=" bg-orange-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            [disabled]="!updateAccount.valid"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </form> 
  </div> 
</div>
`,
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  error!: [];
  constructor(private fb: FormBuilder, private user: UserService, public errorSerive: ErrorService, private modalService: ModalService) { }

  updateAccount = this.fb.group({
    username: ['', Validators.required],
    firstname: [''],
    lastname: ['']
  })


  ngOnInit(): void {

  }

  updateProfil() {
    this.errorSerive.handleError
    const val = this.updateAccount.value;
    if (val.username && val.firstname && val.lastname) {
      this.user.updateUserAccount(val)
        .subscribe(
          {
            error: (e) => this.error = e,

          }
        )
    }

  }

  open() {
    this.modalService.open();
  }

}
