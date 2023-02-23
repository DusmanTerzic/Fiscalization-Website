import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-preduzece-info',
  templateUrl: './preduzece-info.component.html',
  styleUrls: ['./preduzece-info.component.css']
})
export class PreduzeceInfoComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private servis: PreduzeceService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("korisnik"));
    this.slikaURL = "../../assets/images/" + this.korisnik.slika;
  }

  slikaURL: string;
  korisnik;

  editIme(){
    this.dialogRef.open(InfoDialogComponent, {data: "ime"});
    this.dialogRef.afterAllClosed.subscribe((o)=>{
      this.ngOnInit();
    })
  }

  editEmail(){
    this.dialogRef.open(InfoDialogComponent, {data:"email"});
    this.dialogRef.afterAllClosed.subscribe((o)=>{
      this.ngOnInit();
    })
  }

  editTelefon(){
    this.dialogRef.open(InfoDialogComponent, {data:"telefon"});
    this.dialogRef.afterAllClosed.subscribe((o)=>{
      this.ngOnInit();
    })
  }

  editPDV(){
    this.dialogRef.open(InfoDialogComponent, {data:"pdv"});
    this.dialogRef.afterAllClosed.subscribe((o)=>{
      this.ngOnInit();
    })
  }

  insertSifra(){
    this.dialogRef.open(InfoDialogComponent, {data:"sifra"});
    this.dialogRef.afterAllClosed.subscribe((o)=>{
      this.ngOnInit();
    })
  }

  insertRacun(){
    this.dialogRef.open(InfoDialogComponent, {data:"racunIns"});
    this.dialogRef.afterAllClosed.subscribe((o)=>{
      this.ngOnInit();
    })
  }

  insertMagacin(){
    this.dialogRef.open(InfoDialogComponent, {data:"magacinIns"});
    this.dialogRef.afterAllClosed.subscribe((o)=>{
      this.ngOnInit();
    })
  }

  insertKasa(){
    this.dialogRef.open(InfoDialogComponent, {data:"kasaIns"});
    this.dialogRef.afterAllClosed.subscribe((o)=>{
      this.ngOnInit();
    })
  }

  deleteKasa(k){
    let kase = [];
    for(let kasa of this.korisnik.kase){
      if(!(kasa.tip === k.tip && kasa.lokacija.ulica === k.lokacija.ulica && kasa.lokacija.grad === k.lokacija.grad && kasa.lokacija.drzava === k.lokacija.drzava)){
        kase.push(kasa);
      }
    }
    this.servis.deleteKasa(kase).subscribe((res)=>{
      let k = JSON.parse(localStorage.getItem("korisnik"))
      k.kase = kase;
      localStorage.setItem("korisnik", JSON.stringify(k));
      this.ngOnInit();
    })
  }

  deleteMagacin(m){
    let magacini = [];
    for(let mag of this.korisnik.magacini){
      if(!(mag.id === m.id)){
        magacini.push(mag);
      }
    }
    this.servis.deleteMagacin(magacini).subscribe((res)=>{
      let k = JSON.parse(localStorage.getItem("korisnik"))
      k.magacini = magacini;
      localStorage.setItem("korisnik", JSON.stringify(k));
      this.ngOnInit();
    })  
  }

  switchKat(){
    let k;
    if(this.korisnik.kategorija === "prodavnica")
      k="ugostiteljski"
    else
      k = "prodavnica"
    this.servis.updateKat(k).subscribe((res)=>{
      let t = JSON.parse(localStorage.getItem("korisnik"))
      t.kategorija = k;
      localStorage.setItem("korisnik", JSON.stringify(t));
      this.ngOnInit();
    })
  }

  switchPDV(){
    let p;
    if(this.korisnik.pdv)
      p = false;
    else
      p = true;
    
      this.servis.updatePDV(p).subscribe((res)=>{
        let k = JSON.parse(localStorage.getItem("korisnik"))
        k.pdv = p;
        localStorage.setItem("korisnik", JSON.stringify(k));
        this.ngOnInit();
      })

  }

  deleteRacun(r){
    let racuni = [];
    for(let rac of this.korisnik.racuni){
      let k = JSON.parse(localStorage.getItem("korisnik"))
      k.racuni = racuni;
      localStorage.setItem("korisnik", JSON.stringify(k));
      if(!(rac.broj === r.broj)){
        racuni.push(rac);
      }
    }
    this.servis.deleteZiroRacun(racuni).subscribe((res)=>{
      this.ngOnInit();
    }) 
  }
}
