import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="bg-white border-gray-200 px-2 sm:px-4 pl-2 rounded p-3  shadow  zinc:300  h-16 fixed top-0 left-0 right-0 z-50">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
          <span class="self-center text-xl text-gray-800 font-semibold whitespace-nowrap ml-2">SNEAKYPEDIA</span>
        </a>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-3 ml-3 text-sm text-zinc-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-600 dark:text-white-400"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"xmlns="http://www.w3.org/2000/svg" >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden mt-1 w-screen md:block md:w-auto sm:w-screen bg-white" id="mobile-menu">
          <ul class="flex flex-col mt-6 min-w-full md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li routerLinkActive="active">
              <a
                routerLink="../calendar"
                class=" uppercase block py-2 pr-4 pl-3 text-sm text-gray-800  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0"
                >Calendrier</a
              >
            </li>
            <li>
              <a  routerLink="../sneakers" href="" class="  uppercase block py-2 pr-4 pl-3 text-sm text-gray-800 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 "> Sneakers</a>
            </li>

            <li *ngIf="user.isLoggedOut | async" routerLinkActive="active">
              <a routerLink="../connexion" class="uppercase block py-2 pr-4 pl-3 text-sm text-gray-800  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 ">Connexion</a>
            </li>

            <li *ngIf="user.isLoggedIn | async" routerLinkActive="active">
              <a
                routerLink="../compte/detail"
                class=" hover:underline-offset-4 uppercase block py-2 pr-4 pl-3 text-gray-800  text-sm border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">
                Mon compte
              </a>

            </li>
            <li *ngIf="user.isLoggedIn | async" routerLinkActive="active">
              <a (click)="logout()" class="uppercase block py-2 pr-4 pl-3 text-sm text-gray-800  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">
                Deconnexion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

     
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public user: UserService) {}

  ngOnInit(): void {}

  logout() {
    this.user.logout();
  }
}
