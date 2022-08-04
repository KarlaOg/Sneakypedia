import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-sneaker-button',
  template: `
    <div class="relative h-32 w-32">
    <div class="fixed bottom-52 right-0 h-18 w-18">
      <button
        routerLink="/sneaker/add"
        title="add"
        class="fixed right-6 z-50 rounded-full float-right text-white bg-orange-500 p-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  </div>
     
  `,
})
export class AddSneakerButton implements OnInit {
  constructor() { }

  ngOnInit(): void { }


}
