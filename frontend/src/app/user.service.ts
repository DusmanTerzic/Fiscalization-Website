import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preduzece } from './models/preduzece.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000';
  ext: string;

  constructor(private http: HttpClient) { }

  registracija(preduzece: Preduzece, slika: File){
    const formData = new FormData();

    this.ext = slika.name.split('?')[0].split('.').pop();

    formData.append('slika', slika, preduzece.korime + '.' + this.ext);
    formData.append('preduzece', JSON.stringify(preduzece));
    
    return this.http.post(`${this.uri}/preduzece/registracija`, formData);
  }

  dohvSveRacune(){
    const data = {}
    return this.http.post(`${this.uri}/dohvSveRacune`, data);
  }

  login(korime: string, lozinka: string){
    const data = {
      korime: korime,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/dohvatiKorisnika`, data);
  }

  loginAdmin(korime: string, lozinka: string){
    const data = {
      korime: korime,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/admin/login`, data);
  }

  promjenaLozinke(korime: string, lozinka: string, tip: string){
    const data = {
      lozinka: lozinka, 
      korime: korime,
      tip: tip
    }

    return this.http.post(`${this.uri}/promjena`, data);
  }

  pretragaPreduzeca(pib: string){
    const data = {pib: pib}
    return this.http.post(`${this.uri}/preduzece/pretragaPIB`, data);
  }

  updateNarucioci(narucioci: Array<string>, korime: string){
    const data={
      korime:korime,
      narucioci: narucioci
    }

    return this.http.post(`${this.uri}/preduzece/updateNarucioci`, data);
  }

  dohvPreduzece(korime: string){
    const data={
      korime: korime
    }

    return this.http.post(`${this.uri}/preduzece/dohvatiPreduzece`, data);
  }

  dohvPreduzeceMail(email: string){
    const data={
      email: email
    }
    return this.http.post(`${this.uri}/preduzece/dohvatiPreduzeceMail`, data);
  }
}
