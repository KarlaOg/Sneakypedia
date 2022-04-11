import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators"
import {API_URL} from '../../env';
import {Product} from './product.model';

@Injectable()
export class ProductsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.error.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getProducts(): Observable<Product[]> | any{
    return this.http
      .get(`${API_URL}/products`)
      .pipe(catchError(ProductsApiService._handleError));
  }
}