import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-preduzece-izdavanje',
  templateUrl: './preduzece-izdavanje.component.html',
  styleUrls: ['./preduzece-izdavanje.component.css']
})
export class PreduzeceIzdavanjeComponent implements OnInit {

  constructor(private servis: PreduzeceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pretrazeno = false;
    this.zatvaranje = false;
    this.magacini = JSON.parse(localStorage.getItem("korisnik")).magacini;
    this.narucioci = JSON.parse(localStorage.getItem("korisnik")).narucioci;
    this.nar = this.narucioci[0];
    this.mag = this.magacini[0];
    this.ukupna = 0;
    this.cijene = [];
    this.prodajne = [];
    this.jedinice = [];
    this.stavke = [];
    this.porezi = [];
    this.kolicine = [];
    this.stavkeRacuna = [];
    this.vrijednost = 0;
    this.placanje = "gotovina";
    this.kusur = 0;
    this.brLk = "";
    this.ime = "";
    this.prezime = "";
    this.nar = "";
    this.slip = 0;
    this.added = [];
    this.ukupanPorez = 0;
    this.brojOporezivanih = 0;
  }
  pretrazeno: boolean = false;
  vrijednost: number = 0;
  brLk: string = "";
  ime: string = "";
  kusur: number = 0;
  datum: Date;
  prezime: string = "";
  nar: string = "";
  slip: number = 0;
  narucioci = [];
  magacini = [];
  cijene = [];
  prodajne = [];
  mag;
  stavke = [];
  porezi = [];
  kolicine = [];
  stavkeRacuna = [];
  jedinice = [];
  ukupna: number = 0;
  added = []
  zatvaranje = false;
  ukupanPorez: number = 0;
  brojOporezivanih = 0;
  placanje: string = "gotovina"
  poruka: string = "";

  prikazi(){
    this.servis.getAllArtikalMagacin(JSON.parse(localStorage.getItem("korisnik")).pib, this.mag).subscribe((res)=>{
      this.pretrazeno = true;
      this.stavke = JSON.parse(JSON.stringify(res));
      let i = 0;
      for(let stavka of this.stavke){
        if(JSON.parse(localStorage.getItem("korisnik")).pdv && stavka.stopa !== undefined){
          this.porezi[i] = (parseFloat(stavka.stopa)/100)*parseInt(stavka.prodajna); //stopa je u procentima
          this.cijene[i] = parseInt(stavka.prodajna) + this.porezi[i];
        }
        else {this.cijene[i] = stavka.prodajna; this.porezi[i] = 0;}
        if(stavka.jedinica !== undefined){
          this.jedinice[i] = stavka.jedinica;
        }
        this.kolicine[i] = 0;
        i++;
        this.added[i] = false;
      }
    })
  }

  zatvori(){
    this.zatvaranje = true;
  }

  dodajStavku(naziv, kolicina, cijena, ind){
    if(this.porezi[ind] === undefined || this.porezi[ind]==null)
      this.porezi[ind] = 0;
    this.stavkeRacuna.push({
      naziv: naziv,
      kolicina: kolicina,
      cijena: cijena,
      porez: this.porezi[ind],
      jedinica: this.jedinice[ind]
    })
    this.added[ind] = true;
    this.ukupna += parseFloat(cijena)*kolicina;
    this.ukupanPorez += this.porezi[ind]*kolicina;
  }

  ukloniStavku(naziv, i){
    this.stavkeRacuna = this.stavkeRacuna.filter((stavka)=>{
      return naziv !== stavka.naziv;
    })
    this.added[i] = false;
    this.ukupna -= parseFloat(this.cijene[i])*this.kolicine[i];
    this.ukupanPorez -= this.porezi[i]*this.kolicine[i];
  }

  izracunaj(){
    this.kusur = this.vrijednost - this.ukupna;
  }

  platiRacun(){
    this.poruka = "";
    if(this.placanje === "gotovina"){
      if(this.vrijednost === undefined){
        this.poruka += "Unesite vrijednost!\n"
      } else {
        this.kusur = this.vrijednost - this.ukupna;
        if(this.kusur < 0){
          this.poruka += "Vrijednost mora biti veća od cijene"
        }
      }
    }
    if(this.placanje === "kartica"){
      if(this.slip === 0){
        this.poruka += "Unesite slip!\n"
      } else if (!/^[0-9]{1,}$/.test(this.brLk)){
        this.poruka += "Slip mora biti broj! \n";
      }
      if(this.brLk === ""){
        this.poruka += "Unesite broj lične karte!\n"
      } else if (!/^[0-9]{9,9}$/.test(this.brLk)){
        this.poruka += "Broj lične karte mora biti devetocifreni broj! \n";
      }
    }
    if(this.placanje === "virman"){
      if(this.nar === "" && this.nar===undefined){
        this.poruka += "Odaberite naručioca!\n"
      }
    }
    if(this.placanje ==="cek"){
      if(this.ime === ""){
        this.poruka += "Unesite ime! \n"
      } else if (this.ime[0] != this.ime[0].toUpperCase()
                  || !/^[a-zA-Z]+$/.test(this.ime)){
        this.poruka += "Ime mora početi velikim slovom i sadržati samo slova!\n";
      }

      if(this.prezime ===""){
        this.poruka += "Unesite prezime!\n"
      }else if (this.prezime[0] != this.prezime[0].toUpperCase()
              || !/^[a-zA-Z]+$/.test(this.ime)){
        this.poruka += "Prezime mora početi velikim slovom i sadržati samo slova!\n";
      }

      if(this.brLk === ""){
        this.poruka += "Unesite broj lične karte!\n"
      } else if (!/^[0-9]{9,9}$/.test(this.brLk)){
        this.poruka += "Broj lične karte mora biti devetocifreni broj! \n";
      }
    }

    if(this.poruka === ""){
      let datum = new Date(Date.now());
      let data = {
        preduzece : JSON.parse(localStorage.getItem("korisnik")).naziv,
        pib: JSON.parse(localStorage.getItem("korisnik")).pib,
        datum : datum,
        placanje : this.placanje,
        brLk : this.brLk,
        slip: this.slip,
        narucioc: this.nar,
        ime: this.ime,
        prezime: this.prezime,
        vrijednost: this.vrijednost,
        kusur: this.kusur,
        ukupna: this.ukupna,
        detalji: this.stavkeRacuna,
        magacin: this.mag,
        ukupanPorez: this.ukupanPorez
      }

      this.servis.napraviRacun(data).subscribe((res)=>{
        this.dialog.open(InfoDialogComponent,
          {data:"potvrdaUnos"})
        this.dialog.afterAllClosed.subscribe((o)=>{
          this.ngOnInit();
        })
      })
    }
  }
}
