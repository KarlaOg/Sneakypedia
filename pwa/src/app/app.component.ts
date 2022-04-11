import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ProductsApiService} from './components/products/products-api.service';
import {Product} from './components/products/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'pwa';
  productsListSubs: Subscription;
  productsList: Product[];

  constructor(private productsApi: ProductsApiService) {}

  ngOnInit() {
    this.productsListSubs = this.productsApi
      .getProducts()
      .subscribe((res: Product[]) => {
          this.productsList = res;
        },
        console.error
      );
    }
  
    ngOnDestroy() {
      this.productsListSubs.unsubscribe();
    }
}
