import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Favorites } from '../models/favorites'


const apiUrl = "http://localhost/api/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/ld+json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  constructor(private http: HttpClient, private error: ErrorService) { }

  create(favoris: Favorites) {
    return this.http.post<any>(`${apiUrl}favorites`, favoris, httpOptions);
  }

  // TODO Implement 
  get(id: number) {

  }

  // TODO Implement 
  getAll() {
    return this.http.post<any>(`${apiUrl}favorites`, httpOptions);
  }


  // TODO ADD id to delete 
  delete() {
    return this.http.delete<any>(`${apiUrl}favorites`, httpOptions);
  }


}