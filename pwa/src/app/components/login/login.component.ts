import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  template: `  
<div class="min-h-full flex items-center  justify-center py-12 px-4 sm:px-6 lg:px-8 ">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-xl font-extrabold text-zinc-900">CONNECTEZ-VOUS À VOTRE COMPTE</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Ou
        <br>
        <a routerLink="/inscription" class="font-medium  hover:text-orange-400"> Inscrivez-vous   </a>
      </p>
    </div>
     <div *ngIf="error"class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
       {{error}}
      </div>
    <form [formGroup]="form"  (ngSubmit)="login()"  class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Adresse mail </label>
<<<<<<< HEAD
          <input formControlName="email" id="email-address"  name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Adresse mail" email>
=======
          <input formControlName="email" id="email-address"  name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-zinc-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Adresse mail" email>
>>>>>>> b3775c0246ce93907394adeb22dfaf1fb61cce5e
        </div>
        <div>
          <label for="password" class="sr-only">Mot de passe</label>
          <input formControlName="password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-zinc-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Mot de passe">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <!-- <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-black focus:ring-orange-400 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-zinc-900"> Se souvenir </label> -->
        </div>

        <!-- <div class="text-sm">
          <a href="#" class="font-medium text-black hover:text-orange-400  underline underline-offset-4 "> Mot de passe oublié</a>
        </div> -->
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md text-black  hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Connexion
        </button>
      </div>
    </form>
  </div>
</div>

`
  ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error: string = "";

  constructor(private fb: FormBuilder,
    private router: Router,
    private user: UserService) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    const val = this.form.value;
    this.user.checkLoginUser(val)
      .subscribe({
        error: (e) => this.error = "La combinaison « nom d'utilisateur » et « mot de passe » ne correspond à aucun compte.",
        complete: () => this.router.navigateByUrl("/")
      })
  }

}
