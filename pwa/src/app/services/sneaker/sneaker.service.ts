import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/sneakers';
// importer le model sneaker maybe ??? jsp si c'est utile
@Injectable({
  providedIn: 'root'
})
export class SneakerService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }
  get(id:number) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(sneaker: Sneaker) {
    return this.http.post(baseUrl, sneaker);
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