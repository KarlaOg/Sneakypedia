import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sneaker } from 'src/app/models/sneaker';

const searchUrl = 'http://127.0.0.1:8000/api/search/';
const baseUrl = 'http://127.0.0.1:8000/api/sneakers/';

<<<<<<< HEAD
const baseUrl = 'http://127.0.0.1:8000/api/sneakers/';

=======
>>>>>>> b3775c0246ce93907394adeb22dfaf1fb61cce5e
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
<<<<<<< HEAD
  findByTitle(label: string) {
    return this.http.get(`${baseUrl}?name=${label}`);
=======
  findByTitle(label:string) {
    return this.http.get(`${searchUrl}?name=${label}`);
>>>>>>> b3775c0246ce93907394adeb22dfaf1fb61cce5e
  }
}