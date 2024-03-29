import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from '../../models/inventory';
import { ErrorService } from '../common/error.service';
import { environment } from 'src/environments/environment';


const apiUrl = environment.API_PLATFORM_URL;

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

  create(inventory: Inventory) {
    return this.http.post<Inventory>(`${apiUrl}inventories`, inventory, httpOptions);
  }

 
  delete(id: number) {
    return this.http.delete<any>(`${apiUrl}inventories/${id}`, httpOptions);
  }


}