import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../../env';
import {Product} from './product.model';

@Injectable()
export class ProductsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getProducts(): Observable<Product[]> {
    return this.http
      .get(`${API_URL}/products`)
      .catch(ProductsApiService._handleError);
  }
}