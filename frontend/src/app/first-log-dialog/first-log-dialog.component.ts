import { Component, OnInit } from '@angular/core';
import { Kasa } from '../models/kasa.model';
import { Magacin } from '../models/magacin.model';
import { ZiroRacun } from '../models/ziroRacun.model';
import { PreduzeceService } from '../preduzece.service';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, Validators} from '@angular/forms';
import { Sifra } from '../models/sifra.model';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-first-log-dialog',
  templateUrl: './first-log-dialog.component.html',
  styleUrls: ['./first-log-dialog.component.css']
})
export class FirstLogDialogComponent implements OnInit {

  constructor(private servis: PreduzeceService, private router: Router, private dialogRef: MatDialogRef<FirstLogDialogComponent>) { }

  ngOnInit(): void {
  }

  finished: boolean = false;
  pdv: boolean = false;
  kat: string;
  racuni: Array<ZiroRacun> = new Array<ZiroRacun>();
  magacini: Array<Magacin> = new Array<Magacin>();
  kase: Array<Kasa> = new Array<Kasa>();
  sifre: Array<Sifra> = new Array<Sifra>();
  sif: string;
  djelatnost: string;
  idMag: string;
  nazivMag: string;
  brRac: number = 1;
  brMag: number = 1;
  brKas: number = 1;
  brSif: number = 1;
  grad: string;
  drzava: string;
  pbr: string;
  ulica: string;
  tip: string = "MP-500 T";
  porukaRac: string = "";
  porukaMag: string = "";
  porukaKas: string = "";
  porukaSif: string = "";
  porukaFin: string = "";
  banka: string;
  racun: string;

  dodajRacun(){
    this.porukaRac = "";
    if(this.banka === undefined){
      this.porukaRac += "Unesite naziv banke"
    } else if (this.banka[0] !== this.banka[0].toUpperCase()){
      this.porukaRac += "Naziv banke mora početi velikim slovom!\n";
    }

    if(this.racun === undefined){
      this.porukaRac += "Unesite broj računa";
    } else if(!/^[0-9]{3}-[0-9]{12}-[0-9]{2}$/i.test(this.racun)){
      this.porukaRac += "Ziro račun mora biti u formatu xxx-xxxxxxxxxxxx-xx.";
    }

    if(this.porukaRac === ""){
      this.brRac++;
      this.racuni.push({
        banka: this.banka,
        broj: this.racun
      });
      this.banka = "";
      this.racun = "";
    }
  }

  dodajSifru(){
    this.porukaSif = "";
    if(this.sif === undefined){
      this.porukaSif += "Unesite šifru"
    } else if (!/^[0-9]{4}$/i.test(this.sif)){
      this.porukaSif += "Šifra mora biti četvorocifren broj\n";
    }

    if(this.djelatnost === undefined){
      this.porukaSif += "Unesite naziv djelatnosti";
    }

    if(this.porukaSif === ""){
      this.brSif++;
      this.sifre.push({
        broj: parseInt(this.sif),
        djelatnost: this.djelatnost
      });
      this.sif = "";
      this.djelatnost = "";
    }
  }

  dodajKasu(){
    this.porukaKas = "";

    //provjera za postanski broj
    if(this.pbr === undefined){
      this.porukaKas += "Unesite poštanski broj\n";
    } else if (!/^[0-9]{5,5}$/.test(this.pbr)){
          this.porukaKas += "Poštanski broj mora biti petocifreni broj! \n";
    }

    //provjera drzave
    if(this.drzava === undefined){
      this.porukaKas += "Unesite državu!\n";
    } else if (this.drzava[0] != this.drzava[0].toUpperCase()){
          this.porukaKas += "Država mora početi velikim slovom!\n";
    }

    //provjera grada
    if(this.grad === undefined){
      this.porukaKas += "Unesite grad!\n";
    } else if (this.grad[0] != this.grad[0].toUpperCase()){
          this.porukaKas += "Grad mora početi velikim slovom!\n";
    }

    //provjera ulice
    if(this.ulica === undefined){
      this.porukaKas += "Unesite ulicu i broj!\n";
    } else if (this.ulica[0] != this.ulica[0].toUpperCase()){
          this.porukaKas += "Ulica mora početi velikim slovom!\n";
    }

    if(this.porukaKas === ""){
      this.brKas++;
      this.kase.push({
        lokacija: {
          drzava: this.drzava,
          grad: this.grad,
          postanski: parseInt(this.pbr),
          ulica: this.ulica
        },
        tip: this.tip
      });
      this.drzava = "";
      this.grad = "";
      this.pbr = "";
      this.ulica = "";
      this.tip = "MP-500 T"
    }
  }


  dodajMagacin(){
    this.porukaMag = "";
    if(this.idMag === undefined){
      this.porukaMag += "Unesite id magacina"
    } else if (!/^[0-9]{1,}$/i.test(this.idMag)){
      this.porukaMag += "Id magacina mora biti broj!\n";
    }

    if(this.nazivMag === undefined){
      this.porukaMag += "Unesite naziv magacina";
    } else if(this.nazivMag[0] !== this.nazivMag[0].toUpperCase()){
      this.porukaMag += "Naziv magacina mora početi velikim slovom";
    }

    if(this.porukaMag === ""){
      this.brMag++;
      this.magacini.push({
        id: parseInt(this.idMag),
        naziv: this.nazivMag});
      this.idMag = "";
      this.nazivMag = "";
    }
  }

  potvrdi(){
    this.porukaFin = "";

    if(this.kat === undefined ||this.kat === ""){
      this.porukaFin += "Morate unijeti kategoriju preduzeća";
    }

    if(this.magacini.length < 1){
      this.porukaFin += "Morate unijeti bar jedan magacin!";
    }

    if(this.kase.length < 1){
      this.porukaFin += "Morate unijeti bar jednu kasu!";
    }

    if(this.sifre.length < 1){
      this.porukaFin += "Morate unijeti bar jednu sifru!";
    }

    if(this.racuni.length < 1){
      this.porukaFin += "Morate unijeti bar jedan žiro račun!";
    }

    if(this.porukaFin === ""){
      this.servis.prviLog(this.pdv, this.kat, this.racuni, this.sifre, this.magacini, this.kase).subscribe((res)=>{
        let kor = JSON.parse(localStorage.getItem("korisnik"));
        kor.pdv = this.pdv;
        kor.kase = this.kase;
        kor.sifre = this.sifre;
        kor.magacini = this.magacini;
        kor.prvi = false;
        kor.kategorija = this.kat;
        localStorage.setItem("korisnik", JSON.stringify(kor));
        this.finished = true;
      })
    }
  }

  odustani(){
    this.dialogRef.close();
  }

  ok(){
    this.router.navigate(['preduzece']);
    this.dialogRef.close();
  }
}
