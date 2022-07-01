import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: ` 
  <div class="container px-5 pt-40 mx-auto">

    <div class="lg:gap-5 lg:flex flex justify-items-stretch items-center content-center	 justify-center ">
      <div
        class="flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 class="font-bold text-orange-600 text-9xl">404</h1>
        <p
          class="mb-2 text-2xl font-bold text-center text-gray-900 md:text-3xl"
        >
          <span class="text-orange-600 font-mono ">Oops!</span> Page not found
        </p>
        <p class="mb-8 text-center text-gray-500 md:text-lg">
          La page que vous recherchez n'exisite pas. 
        </p>
        <a
          href="#"
          class="px-6 py-2 text-sm font-semibold text-orange-700 bg-orange-100"
          >Accueil</a
        >
      </div>
  
      <div class="mt-4 flex flex-col justify-center place-content-center ustify-items-stretch items-center content-center	">
        <img
          src="../assets/sneakers2.png"
          alt="img"
          class=" w-4/6 h-full"
        />
        
      </div>
    </div>
  </div>

  `,
  styles: [``],
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("doesnt existe")
  }

}
