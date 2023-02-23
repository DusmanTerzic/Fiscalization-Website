import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Adresa } from '../models/adresa.model';
import { Kasa } from '../models/kasa.model';
import { Magacin } from '../models/magacin.model';
import { Narucioc } from '../models/narucioc.model';
import { Preduzece } from '../models/preduzece.model';
import { Sifra } from '../models/sifra.model';
import { ZiroRacun } from '../models/ziroRacun.model';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { UserService } from '../user.service';
import * as _ from 'lodash';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-dodavanje',
  templateUrl: './admin-dodavanje.component.html',
  styleUrls: ['./admin-dodavanje.component.css']
})
export class AdminDodavanjeComponent implements OnInit {

  constructor(private servis: UserService, public formBuilder: FormBuilder,
    private router: Router, public dialog: MatDialog, private adminServis: AdminService) { }

  ngOnInit(): void {
  }

  lozinkaK: string;
  porukaK: string;
  imeK: string;
  prezimeK: string;
  korimeK: string;
  telefonK: string;
  brlkK: string;
  ime: string;
  prezime: string;
  korime: string;
  lozinka: string;
  potvrda: string;
  telefon: string;
  email: string;
  naziv: string;
  pib: string;
  mbr: string;
  drzava: string;
  grad: string;
  pbr: string;
  ulica: string;
  preduzece: Preduzece;
  adresa: Adresa;
  slika: File=null;
  poruka: string;
  porSlika: string;

  openDialog(){
    this.dialog.open(RegisterDialogComponent)
    this.dialog.afterAllClosed.subscribe((res)=>{
      this.ngOnInit();
    });
  }

  registracijaKupca(){
    this.porukaK = ""

    //provjera imena
    if(this.imeK === undefined){
      this.porukaK += "Unesite ime\n";
    } else if (this.imeK[0] != this.imeK[0].toUpperCase()
               || !/^[a-zA-Z]+$/.test(this.ime)){
          this.porukaK += "Ime mora početi velikim slovom i sadržati samo slova!\n";
    }

    if(this.prezimeK === undefined){
      this.porukaK += "Unesite prezime\n";
    } else if (this.prezimeK[0] != this.prezimeK[0].toUpperCase()
                || !/^[a-zA-Z]+$/.test(this.prezimeK)){
          this.poruka += "Prezime mora početi velikim slovom i sadržati samo slova!\n";
    }

    //provjera korisničkog imena
    if (this.korimeK === undefined) {
      this.porukaK += "Unesite korisničko ime\n";
    } else if(!/^[a-zA-Z0-9]{3,}$/i.test(this.korimeK)){
        this.porukaK += "Korisničko ime može sadržati samo slova i brojeve i mora imati bar 3 karaktera\n"
    } 
    

    //provjera lozinke
    if(this.lozinkaK === undefined){
      this.porukaK += "Unesite lozinku\n";
    } else if (!/^(?=.{8,12})(?=.*[a-z])(?=.*)(?=.*[A-Z])(?=.*[@#$%^&+='{}<>?]).*$/.test(this.lozinkaK)){
          this.porukaK += "Lozinka mora imati najmanje 8, a najvise 12 karaktera, početi slovom i imati bar jedno veliko slovo, malo slovo, broj i specijalni karakter!\n";
    }

    var phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    if(this.telefonK === undefined){
      this.porukaK += "Unesite broj telefona!\n";
    } else if (!phoneRegex.test(this.telefonK)){
          this.porukaK += "Broj telefona nije validan!\n";
    }

    //provjera za pib
    if(this.brlkK === undefined){
      this.porukaK += "Unesite Broj lične karte\n";
    } else if (!/^[0-9]{9,9}$/.test(this.brlkK)){
          this.porukaK += "Broj lične karte mora biti devetocifren! \n";
    }

    if(this.porukaK === ""){
      this.adminServis.dodajKupca(this.imeK, this.prezimeK, this.lozinkaK, this.telefonK, this.korimeK, this.brlkK).subscribe((res)=>{
        if(res['message'] === "ok"){
          this.openDialog();
        } else {
          this.porukaK+=res['message'];  //ako postoji kor sa tim imenom/mailom ulazi se ovdje
        }
      })
    }
  }

  registracija(){
    this.poruka = ""
    //dio sa slikom - kasnije

    //provjera imena
    if(this.ime === undefined){
      this.poruka += "Unesite ime\n";
    } else if (this.ime[0] != this.ime[0].toUpperCase()
               || !/^[a-zA-Z]+$/.test(this.ime)){
          this.poruka += "Ime mora početi velikim slovom i sadržati samo slova!\n";
    }

    //provjera za sliku
    if (this.slika == null) {
      this.poruka += "Izaberite sliku\n";
    }
    //provjera prezimena
    if(this.prezime === undefined){
      this.poruka += "Unesite prezime\n";
    } else if (this.prezime[0] != this.prezime[0].toUpperCase()
                || !/^[a-zA-Z]+$/.test(this.prezime)){
          this.poruka += "Prezime mora početi velikim slovom i sadržati samo slova!\n";
    }
    
    //provjera korisničkog imena
    if (this.korime === undefined) {
      this.poruka += "Unesite korisničko ime\n";
    } else if(!/^[a-zA-Z0-9]{3,}$/i.test(this.korime)){
        this.poruka += "Korisničko ime može sadržati samo slova i brojeve i mora imati bar 3 karaktera\n"
    } 
    

    //provjera lozinke
    if(this.lozinka === undefined){
      this.poruka += "Unesite lozinku\n";
    } else if (!/^(?=.{8,12})(?=.*[a-z])(?=.*)(?=.*[A-Z])(?=.*[@#$%^&+='{}<>?]).*$/.test(this.lozinka)){
          this.poruka += "Lozinka mora imati najmanje 8, a najvise 12 karaktera, početi slovom i imati bar jedno veliko slovo, malo slovo, broj i specijalni karakter!\n";
    }

    //provjera potvrde lozinke
    if(this.potvrda === undefined){
      this.poruka += "Unesite potvrdu lozinke\n";
    } else if (this.potvrda !== this.lozinka){
          this.poruka += "Ponovljena lozinka nije validna!\n";
    }

    //provjera maila
    var emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(this.email === undefined){
      this.poruka += "Unesite email\n";
    } else if (!emailRegex.test(this.email)){
        this.poruka += "E-mail nije u validnom formatu!\n";
    } 

    //provjera telefona
    var phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    if(this.telefon === undefined){
      this.poruka += "Unesite broj telefona!\n";
    } else if (!phoneRegex.test(this.telefon)){
          this.poruka += "Broj telefona nije validan!\n";
    }

    //provjera naziva
    if(this.naziv === undefined){
      this.poruka += "Unesite naziv preduzeća\n";
    } else if (this.naziv[0] != this.naziv[0].toUpperCase()){
          this.poruka += "Naziv mora početi velikim slovom!\n";
    }

    //provjera za pib
    if(this.pib === undefined){
      this.poruka += "Unesite PIB\n";
    } else if (!/^[0-9]{9,9}$/.test(this.pib) || this.pib[0]=="0"){
          this.poruka += "PIB mora biti devetocifreni broj koji ne pocinje sa 0! \n";
    }

    //provjera za maticni broj
    if(this.mbr === undefined){
      this.poruka += "Unesite matični broj preduzeća\n";
    } else if (!/^[0-9]{8,8}$/.test(this.mbr)){
          this.poruka += "Matični broj preduzeća mora biti osmocifreni broj! \n";
    }

    //provjera za postanski broj
    if(this.pbr === undefined){
      this.poruka += "Unesite poštanski broj\n";
    } else if (!/^[0-9]{5,5}$/.test(this.pbr)){
          this.poruka += "Poštanski broj mora biti petocifreni broj! \n";
    }

    //provjera drzave
    if(this.drzava === undefined){
      this.poruka += "Unesite državu!\n";
    } else if (this.drzava[0] != this.drzava[0].toUpperCase()){
          this.poruka += "Država mora početi velikim slovom!\n";
    }

    //provjera grada
    if(this.grad === undefined){
      this.poruka += "Unesite grad!\n";
    } else if (this.grad[0] != this.grad[0].toUpperCase()){
          this.poruka += "Grad mora početi velikim slovom!\n";
    }

    //provjera ulice
    if(this.ulica === undefined){
      this.poruka += "Unesite ulicu i broj!\n";
    } else if (this.ulica[0] != this.ulica[0].toUpperCase()){
          this.poruka += "Ulica mora početi velikim slovom!\n";
    }

    if(this.poruka === ""){
      this.preduzece = {
        ime: this.ime,
        prezime: this.prezime,
        korime: this.korime,
        lozinka: this.lozinka,
        email: this.email,
        slika: this.korime + '.' + this.slika.name.split('?')[0].split('.').pop(),
        status: "neaktivan",
        adresa: {
          drzava: this.drzava,
          grad: this.grad,
          ulica: this.ulica,
          postanski: parseInt(this.pbr)
        },
        telefon: this.telefon,
        naziv: this.naziv,
        pib: this.pib,
        maticni: this.mbr,
        prvi: false,
        pdv: false,
        kategorija: "prodavnica", //po defaultu
        magacini: new Array<Magacin>(),
        kase: new Array<Kasa>(),
        sifre: new Array<Sifra>(),
        racuni: new Array<ZiroRacun>(),
        narucioci: new Array<Narucioc>()
      }
      this.servis.registracija(this.preduzece, this.slika).subscribe((res)=>{
        if(res['message'] === "ok"){
          this.openDialog();
        } else {
          this.poruka+=res['message'];  //ako postoji kor sa tim imenom/mailom ulazi se ovdje
        }
      });
    }
  }

  onChange(event) {
    this.porSlika = "";
    if (event.target.files && event.target.files[0]) {
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 300;
      const max_width = 300;
      const min_height = 100;
      const min_width = 100;


      if (!_.includes(allowed_types, event.target.files[0].type)) {
        this.porSlika += 'Samo slike su dozvoljene ( JPG / PNG )\n';
      } else {
        const reader = new FileReader();
        var image = new Image();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (e: any) => {
          image.src = e.target.result;
          image.onload = () => {
            if (image.height > max_height || image.width > max_width ||
              image.height < min_height || image.width < min_width) {
              this.porSlika += "Slika nije u dozvoljenim dimenzijama\n";
            }
          }
        }
      }
      if (this.porSlika === "") {
        this.slika = event.target.files[0];
        this.porSlika = "";
      }
    }
  }

}
