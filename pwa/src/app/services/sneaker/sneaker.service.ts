import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sneaker } from 'src/app/models/sneaker';


const baseUrl = 'http://127.0.0.1:8000/api/sneakers/';

@Injectable({
  providedIn: 'root'
})

export class SneakerService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<any[]>(baseUrl);
  }
  get(id:number) {
    return this.http.get<any[]>(`${baseUrl}${id}`);
  }
  create(sneaker: any) {
    return this.http.post<any>(baseUrl, sneaker);
  }
  update(id:number, sneaker:Sneaker) {
    return this.http.put(`${baseUrl}/${id}`, sneaker);
  }
  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll() {
    return this.http.delete(baseUrl);
  }
  findByTitle(label:string) {
    return this.http.get(`${baseUrl}?label=${label}`);
  }
}