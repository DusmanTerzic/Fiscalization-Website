import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  aktiviraj(pib: string){
    const data = {pib: pib}
    return this.http.post(`${this.uri}/admin/aktiviraj`, data);
  }

  deaktiviraj(pib: string){
    const data = {pib: pib}
    return this.http.post(`${this.uri}/admin/deaktiviraj`, data);
  }

  dohvatiPreduzeca(){
    return this.http.post(`${this.uri}/admin/dohvatiPreduzeca`, {});
  }

  getAllRacuni(){
    return this.http.post(`${this.uri}/admin/getAllRacuni`, {});
  }

  dodajKupca(ime: string, prezime: string, lozinka: string, telefon: string, korime: string, brLk: string){
    const data = {
      ime: ime,
      prezime: prezime, 
      lozinka: lozinka, 
      telefon: telefon,
      korime: korime, 
      brLk: brLk
    }

    return this.http.post(`${this.uri}/admin/dodajKupca`, data)
  }

}
