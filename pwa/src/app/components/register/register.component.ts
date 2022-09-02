import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/common/error.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-register',
  template: `

  <div class="pt-64 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Inscrivez-vous sur  <p class="text-orange-600">SNEAKYPEDIA</p></h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Où
        <br>
        <a routerLink="/connexion" class="font-medium sviolet hover:text-orange-400"> Connectez-vous  </a>
      </p> 
    </div>
    <div *ngIf="error"class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
       {{ this.error}}
      </div>

      <div *ngIf="success"class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      </div>
    <form [formGroup]="forRegister" (ngSubmit)="register()" #registerForm="ngForm" class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">

        <div>
       
          <label for="email-address" class="sr-only">Adresse Mail</label>
          <input formControlName="email" id="email-address" name="email" type="email" autocomplete="email" required  class=" form-control appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"placeholder="Adresse Mail *">
          <span
                class="text-xs py-2  text-red-500"
                *ngIf="
                  !forRegister.get('email')?.valid &&
                  forRegister.get('email')?.touched
                "
                >Veuillez entrer une adresse mail valide.</span
              >
        </div>
        <div>
       
          <label for="password" class="sr-only">Password</label>
          <input formControlName="password" id="password" name="password" type="password" autocomplete="current-password" required  minlength="8" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Mot de passe *">
          <span
                class="text-xs py-2  text-red-500"
                *ngIf="
                  !forRegister.get('password')?.valid &&
                  forRegister.get('password')?.touched
                "
                >Veuillez entrer un mot de passe avec une longueur de 8 caractères min avec des chiffres et des lettres.</span
              >
        </div>
        <div>
          <label for="firstname" class="sr-only">Nom:</label>
          <input formControlName="firstname" id="firstname" name="fistname" type="text" autocomplete="firstname" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"  placeholder="Nom">
        </div>
        <div>
          <label for="lastname" class="sr-only">Prénom</label>
          <input formControlName="lastname" id="lastname" name="lastname" type="text" autocomplete="lastnam" required  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md  focus:outline-none focus:ring-black 
          focus:border-black focus:z-10 sm:text-sm" placeholder="Prénom">
        </div>
      </div>
      

      <div class="flex items-center justify-between">
        <div class="flex items-center"></div>

      </div>


      <div>
        <button (click)="register()" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md text-black hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-black group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Inscription
        </button>
      </div>
    </form>
  </div>
</div>`,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forRegister: FormGroup;
  error: string = '';
  success: string = "";

  constructor(private fb: FormBuilder,
    private router: Router,
    private user: UserService,
    public errorService: ErrorService) {

    this.forRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstname: [''],
      lastname: ['']
    });

  }

  ngOnInit(): void {
    // console.log(this.errorService)
  }
  register() {
    this.errorService.handleError
    const val = this.forRegister.value;
    if (val.email && val.password) {

      this.user.register(val)
        .subscribe(
          {
            next: () => this.success = "Inscription réussie. Veuillez vous connecter.",
            error: (e) => this.error = "Il y a eu une erreur. Veuillez ressayer.",
            complete: () => this.router.navigateByUrl('/connexion')
          }
        );
    }
  }

  onHandleSuccess() {
    this.success = '';
  }

}
