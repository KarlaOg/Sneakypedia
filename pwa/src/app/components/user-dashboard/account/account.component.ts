import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account',
  template: `
  <div class="">
   <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form [formGroup]="updateAccount">
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
                Nom d'utilisateur * 
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


           
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex  justify-between flex-row items-center ">
        <button
        disabled
        data-modal-toggle="defaultModal"
        class="text-xs font-medium text-gray-600 hover:text-gray-400  underline underline-offset-4 "
        type="button"
       
        >Supprimer mon compte
      </button>
        
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
<app-modal></app-modal>
`,
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  error!: [];
  constructor(private fb: FormBuilder, private user: UserService, public errorSerive: ErrorService) { }

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

}
