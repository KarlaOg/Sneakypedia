import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';


const urlApi = ''

export class FavorisService {
  constructor(private http: HttpClient ,  private error: ErrorService) { }

  create(){
    return this.http.post<>(urlApi); 
  }

}