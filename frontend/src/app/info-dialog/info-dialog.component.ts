import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private router: Router, private servis: PreduzeceService,
  private dialogRef: MatDialogRef<InfoDialogComponent>) { }

  ngOnInit(): void {
  }

  poruka: string = "";
  ime: string;
  prezime: string;
  email: string;
  telefon: string;
  broj: string;
  djelatnost: string;
  racun: string;
  banka: string;
  idMag: string;
  naziv: string;
  drzava: string;
  grad: string; 
  pbr: string;
  ulica: string;
  tip: string;

  deleteDa(){
    let data = {close: true}
    this.dialogRef.close(data); 
  }

  deleteNe(){
    let data = {close: false}
    this.dialogRef.close(data); 
  }

  updateIme(){
    this.poruka = ""
    //provjera imena
    if(this.ime === undefined){
      this.poruka += "Unesite ime\n";
    } else if (this.ime[0] != this.ime[0].toUpperCase()
               || !/^[a-zA-Z]+$/.test(this.ime)){
          this.poruka += "Ime mora početi velikim slovom i sadržati samo slova!\n";
    }

    //provjera prezimena
    if(this.prezime === undefined){
      this.poruka += "Unesite prezime\n";
    } else if (this.prezime[0] != this.prezime[0].toUpperCase()
                || !/^[a-zA-Z]+$/.test(this.prezime)){
          this.poruka += "Prezime mora početi velikim slovom i sadržati samo slova!\n";
    }

    this.servis.updateIme(this.ime, this.prezime).subscribe((res)=>{
      this.dialogRef.close();
    })
  }
  updateMail(){
    this.poruka = ""

    //provjera maila
    var emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(this.email === undefined){
      this.poruka += "Unesite email\n";
    } else if (!emailRegex.test(this.email)){
        this.poruka += "E-mail nije u validnom formatu!\n";
    } 

    this.servis.updateMail(this.email).subscribe((res)=>{
      this.dialogRef.close();
    })
  }
  updateTelefon(){
    this.poruka = ""

    //provjera telefona
    var phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    if(this.telefon === undefined){
      this.poruka += "Unesite broj telefona!\n";
    } else if (!phoneRegex.test(this.telefon)){
          this.poruka += "Broj telefona nije validan!\n";
    }

    this.servis.updateTelefon(this.telefon).subscribe((res)=>{
      this.dialogRef.close();
    })
  }
  insertSifra(){
    this.poruka = ""

    if(this.broj === undefined){
      this.poruka += "Unesite šifru"
    } else if (!/^[0-9]{4}$/i.test(this.broj)){
      this.poruka += "Šifra mora biti četvorocifren broj\n";
    }

    if(this.djelatnost === undefined){
      this.broj += "Unesite naziv djelatnosti";
    }

    this.servis.insertSifra(this.broj, this.djelatnost).subscribe((res)=>{
      this.dialogRef.close();
    })

  }
  insertRacun(){
    this.poruka = ""

    if(this.banka === undefined){
      this.poruka += "Unesite naziv banke"
    } else if (this.banka[0] !== this.banka[0].toUpperCase()){
      this.poruka += "Naziv banke mora početi velikim slovom!\n";
    }

    if(this.racun === undefined){
      this.poruka += "Unesite broj računa";
    } else if(!/^[0-9]{3}-[0-9]{12}-[0-9]{2}$/i.test(this.racun)){
      this.poruka += "Ziro račun mora biti u formatu xxx-xxxxxxxxxxxx-xx.";
    }

    this.servis.insertRacun(this.racun, this.banka).subscribe((res)=>{
      this.dialogRef.close();
    })
  }
  insertMagacin(){
    this.poruka = ""

    if(this.idMag === undefined){
      this.poruka += "Unesite id magacina"
    } else if (!/^[0-9]{1,}$/i.test(this.idMag)){
      this.poruka += "Id magacina mora biti broj!\n";
    }

    if(this.naziv === undefined){
      this.poruka += "Unesite naziv magacina";
    } else if(this.naziv[0] !== this.naziv[0].toUpperCase()){
      this.poruka += "Naziv magacina mora početi velikim slovom";
    }

    this.servis.insertMagacin(this.idMag, this.naziv).subscribe((res)=>{
      this.dialogRef.close();
    })
  }
  insertKasa(){
    this.poruka = ""

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

    if(this.tip === undefined){
      this.poruka += "Izaberite tip!\n";
    }

    this.servis.insertKasa(this.pbr, this.drzava, this.grad, this.ulica, this.tip).subscribe((res)=>{
      this.dialogRef.close();
    })
  }

}
