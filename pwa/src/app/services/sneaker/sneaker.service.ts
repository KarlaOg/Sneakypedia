import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { modelApiSneaker, Sneaker } from 'src/app/models/sneaker';
import { environment } from 'src/environments/environment';

const baseUrl = environment.DJANGO_URL;
const searchUrl = environment.SEARCH_URL;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/ld+json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class SneakerService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<any[]>(baseUrl);
  }
  get(id: number) {
    return this.http.get<Sneaker>(`${baseUrl}${id}/`);
  }
  create(sneaker: any) {
    return this.http.post<any>(baseUrl, sneaker);
  }

  update(id:number, sneaker:any) {
    return this.http.put(`${baseUrl}${id}/`, sneaker);
  }
  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll() {
    return this.http.delete(baseUrl);
  }
  findByTitle(label: string) {
    return this.http.get<any[]>(`${searchUrl}?name=${label}`);
  }
}