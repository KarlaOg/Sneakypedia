import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: ` 
  <section class="relative">
  <div class="container px-5 pt-44 mx-auto">
    <div class="md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-1 w-full">
        <p> Ooops la page demandée n'éxiste pas.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
  `,
  styles: [``],
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
