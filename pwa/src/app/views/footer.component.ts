import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  template: `
   <footer class="p-4 shadow md:px-6 md:py-8 bg-gray-900 ">
  <div class="sm:flex sm:items-center sm:justify-between">
    <a href="#" class="flex items-center mb-4 sm:mb-0">
      <span class="text-xl text-white font-semibold whitespace-nowrap"
        >Sneakypedia
        <sub class="text-xs text-orange-500">by Sneakies</sub></span
      >
    </a>
    <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 uppercase">A propos</a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 uppercase"
          >Privacy Policy</a
        >
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 uppercase">Licensing</a>
      </li>
      <li>
        <a href="#" class="hover:underline uppercase">Contact</a>
      </li>
    </ul>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <span class="block text-sm text-white sm:text-center uppercase"
    >© 2022 <a href="#" class="hover:underline">Sneakypedia™</a>. Tous droit
    reservés.
  </span>
</footer>

     
  `,
})
export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }


}
