import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KupacService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  dohvatiArtikalMagacine(pib: string){
    const data = {pib: pib}
    return this.http.post(`${this.uri}/kupac/dohvatiArtikalMagacine`, data);
  }

  dohvRacune(brLk: string){
    const data = {brLk: brLk}
    return this.http.post(`${this.uri}/kupac/dohvRacune`, data);
  }
}
