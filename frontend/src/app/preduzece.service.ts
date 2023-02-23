import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ZiroRacun } from './models/ziroRacun.model';
import { Sifra } from './models/sifra.model';
import { Magacin } from './models/magacin.model';
import { Kasa } from './models/kasa.model';
import { KupacRacuniComponent } from './kupac-racuni/kupac-racuni.component';
import { Artikal } from './models/artikal.model';

@Injectable({
  providedIn: 'root'
})
export class PreduzeceService {
  dohvatiArtikalMagacin(sifra: any, magacini: any, pib: any) {
    const data = {
      magacini: magacini,
      sifra: sifra, 
      pib: pib
    }
    return this.http.post(`${this.uri}/preduzece/dohvatiArtikalMagacin`, data);
  }

  napraviRacun(data){
    return this.http.post(`${this.uri}/preduzece/napraviRacun`, data);
  }

  getAllRacuni(pib: string){
    const data = {
      pib: pib
    }
    return this.http.post(`${this.uri}/preduzece/getAllRacuni`, data);
  }

  getAllArtikalMagacin(pib: string, naziv: string) {
    const data = {
      naziv: naziv,
      pib: pib
    }
    return this.http.post(`${this.uri}/preduzece/getAllArtikalMagacin`, data);
  }

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000";

  prviLog(pdv: boolean, kat: string, racuni: Array<ZiroRacun>, sifre: Array<Sifra>, magacini: Array<Magacin>, kase: Array<Kasa>){
    const data = {
      korime: JSON.parse(localStorage.getItem("korisnik")).korime,
      pdv: pdv,
      kat: kat, 
      racuni: racuni,
      sifre: sifre,
      magacini: magacini, 
      kase: kase
    }

    return this.http.post(`${this.uri}/preduzece/prviLog`, data);
  }

  updateIme(ime: string, prezime:string){
    const data = {
      korime: JSON.parse(localStorage.getItem("korisnik")).korime,
      ime: ime,
      prezime:prezime
    }

    let kor = JSON.parse(localStorage.getItem("korisnik"))
    kor.ime = ime;
    kor.prezime = prezime;
    localStorage.setItem("korisnik", JSON.stringify(kor));

    return this.http.post(`${this.uri}/preduzece/updateIme`, data);
  }

  updateMail(email: string){
    const data = {
      korime: JSON.parse(localStorage.getItem("korisnik")).korime,
      email: email
    }

    let kor = JSON.parse(localStorage.getItem("korisnik"))
    kor.email = email;
    localStorage.setItem("korisnik", JSON.stringify(kor));

    return this.http.post(`${this.uri}/preduzece/updateMail`, data);
  }

  dohvatiArtikle(pib: string){
    const data = {
      pib: pib
    }

    return this.http.post(`${this.uri}/preduzece/dohvatiArtikle`, data);
  }

  dohvatiKategorije(pib: string){
    const data = {
      pib: pib
    }

    return this.http.post(`${this.uri}/preduzece/dohvatiKategorije`, data);
  }

  dodajArtikal(artikal: Artikal){
    const data = {
      artikal: artikal
    }

    return this.http.post(`${this.uri}/preduzece/dodajArtikal`, data);
  }

  dodajArtikalSlika(artikal: Artikal, slika: File){
    const formData = new FormData();

    let ext = slika.name.split('?')[0].split('.').pop();

    formData.append('slika', slika,  artikal.naziv+'-'+artikal.sifra + '.' + ext);
    formData.append('artikal', JSON.stringify(artikal));

    return this.http.post(`${this.uri}/preduzece/dodajArtikalSlika`, formData);
  }


  dodajArtikalKategoriji(artikal: string, kategorija: string){
    const data = {
      artikal: artikal,
      kategorija: kategorija
    }

    return this.http.post(`${this.uri}/preduzece/dodajArtikalKategoriji`, data);
  }

  dodajArtikalMagacinu(magId, magNaziv, nazivArtikla, sifra, jedinica, stopa, proizvodjac,
    kupovna, prodajna, stanje, min, max){
      if(proizvodjac === undefined || proizvodjac == null) proizvodjac = ""
      const data = {
        idMag: magId,
        nazivMag: magNaziv,
        nazivArt: nazivArtikla,
        sifra: sifra,
        kupovna: kupovna,
        prodajna: prodajna,
        stanje: stanje,
        min: min,
        max: max,
        stopa: stopa,
        jedinica: jedinica,
        proizvodjac: proizvodjac,
        pib: JSON.parse(localStorage.getItem("korisnik")).pib
      }

      return this.http.post(`${this.uri}/preduzece/dodajArtikalMagacinu`, data);

    }
  
    updatujArtikalMagacinu(magId, magNaziv, nazivArtikla, sifra, jedinica, stopa, proizvodjac,
      kupovna, prodajna, stanje, min, max){
        if(proizvodjac === undefined  || proizvodjac == null) proizvodjac = ""
        const data = {
          idMag: magId,
          nazivMag: magNaziv,
          nazivArt: nazivArtikla,
          sifra: sifra,
          kupovna: kupovna,
          prodajna: prodajna,
          stanje: stanje,
          min: min,
          max: max,
          stopa: stopa,
          jedinica: jedinica,
          proizvodjac: proizvodjac,
          pib: JSON.parse(localStorage.getItem("korisnik")).pib
        }
  
        return this.http.post(`${this.uri}/preduzece/updatujArtikalMagacinu`, data);
  
      }
    

  ubaciKategoriju(pib: string, naziv: string, nad: string){
    const data = {
      pib: pib,
      naziv: naziv,
      nad: nad
    }

    return this.http.post(`${this.uri}/preduzece/ubaciKategoriju`, data);

  }

  izbrisiArtikal(pib: string, sifra: string){
    const data = {
      pib: pib,
      sifra: sifra
    }

    return this.http.post(`${this.uri}/preduzece/izbrisiArtikal`, data);
  }

  updateTelefon(telefon: string){
    const data = {
      korime: JSON.parse(localStorage.getItem("korisnik")).korime,
      telefon: telefon
    }

    let kor = JSON.parse(localStorage.getItem("korisnik"))
    kor.telefon = telefon;
    localStorage.setItem("korisnik", JSON.stringify(kor));

    return this.http.post(`${this.uri}/preduzece/updateTelefon`, data);
  }

  insertSifra(broj: string, djelatnost: string){
    let sifre = JSON.parse(localStorage.getItem("korisnik")).sifre;
    sifre.push({broj: broj, djelatnost: djelatnost})
    const data = {
      korime: JSON.parse(localStorage.getItem("korisnik")).korime,
      sifre: sifre
    }

    let kor = JSON.parse(localStorage.getItem("korisnik"))
    kor.sifre = sifre;
    localStorage.setItem("korisnik", JSON.stringify(kor));

    return this.http.post(`${this.uri}/preduzece/insertSifra`, data);
  }

  insertRacun(racun: string, banka: string){
    let racuni = JSON.parse(localStorage.getItem("korisnik")).racuni;
    racuni.push({banka: banka, broj: racun})
    const data = {
      korime: JSON.parse(localStorage.getItem("korisnik")).korime,
      racuni: racuni
    }

    let kor = JSON.parse(localStorage.getItem("korisnik"))
    kor.racuni = racuni;
    localStorage.setItem("korisnik", JSON.stringify(kor));

    return this.http.post(`${this.uri}/preduzece/insertRacun`, data);
  }

  insertMagacin(idMag: string, naziv: string){
    let magacini = JSON.parse(localStorage.getItem("korisnik")).magacini;
    magacini.push({naziv:naziv, id: idMag})
    const data = {
      korime: JSON.parse(localStorage.getItem("korisnik")).korime,
      magacini: magacini
    }

    let kor = JSON.parse(localStorage.getItem("korisnik"))
    kor.magacini = magacini;
    localStorage.setItem("korisnik", JSON.stringify(kor));

    return this.http.post(`${this.uri}/preduzece/insertMagacin`, data);
  }
  deleteKasa(k){
    const data = {
      pib: JSON.parse(localStorage.getItem("korisnik")).pib,
      kase: k
    }

    return this.http.post(`${this.uri}/preduzece/deleteKasa`, data);
  }

  izbrisiArtikalKategoriji(naziv, kategorija){
    const data = {
      naziv: naziv,
      kategorija: kategorija,
      pib: JSON.parse(localStorage.getItem("korisnik")).pib
    }

    return this.http.post(`${this.uri}/preduzece/izbrisiArtKategoriji`, data);
  }

  updateKat(k){
    const data = {
      pib: JSON.parse(localStorage.getItem("korisnik")).pib,
      k: k
    }

    return this.http.post(`${this.uri}/preduzece/updateKat`, data);
  }

  updatePDV(k){
    const data = {
      pib: JSON.parse(localStorage.getItem("korisnik")).pib,
      k: k
    }

    return this.http.post(`${this.uri}/preduzece/updatePDV`, data);
  }

  deleteMagacin(m){
    const data = {
      pib: JSON.parse(localStorage.getItem("korisnik")).pib,
      magacini: m
    }

    return this.http.post(`${this.uri}/preduzece/deleteMagacin`, data);
  }

  deleteZiroRacun(z){
    const data = {
      pib: JSON.parse(localStorage.getItem("korisnik")).pib,
      racuni: z
    }

    return this.http.post(`${this.uri}/preduzece/deleteZiroRacun`, data);
  }

  insertKasa(pbr: string, drzava: string, grad: string, ulica: string, tip: string){
    let kase = JSON.parse(localStorage.getItem("korisnik")).kase;
    kase.push({tip: tip, lokacija : {
      grad: grad, ulica: ulica, drzava: drzava, postanski: pbr
    }})
    const data = {
      korime: JSON.parse(localStorage.getItem("korisnik")).korime,
      kase: kase
    }

    let kor = JSON.parse(localStorage.getItem("korisnik"))
    kor.kase = kase;
    localStorage.setItem("korisnik", JSON.stringify(kor));

    return this.http.post(`${this.uri}/preduzece/insertKasa`, data);
  }
}
