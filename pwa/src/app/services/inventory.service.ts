import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inventory } from '../models/inventory';
import { ErrorService } from './error.service';


const apiUrl = "http://localhost/api/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/ld+json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  constructor(private http: HttpClient, private error: ErrorService) { }

  create(inventory: inventory) {
    return this.http.post<any>(`${apiUrl}inventories`, inventory, httpOptions);
  }

  // TODO Implement 
  get(id: number) {

  }

  // TODO Implement 
  getAll() {

  }

  // TODO ADD id to delete 
  delete() {
    return this.http.delete<any>(`${apiUrl}inventory`, httpOptions);
  }


}