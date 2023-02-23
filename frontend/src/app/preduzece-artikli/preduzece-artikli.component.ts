import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Artikal } from '../models/artikal.model';
import { PreduzeceService } from '../preduzece.service';
import { Kategorija } from '../models/kategorija.model';
import { DialogDodajArtikalComponent } from '../dialog-dodaj-artikal/dialog-dodaj-artikal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DodajKategorijuDialogComponent } from '../dodaj-kategoriju-dialog/dodaj-kategoriju-dialog.component';

@Component({
  selector: 'app-preduzece-artikli',
  templateUrl: './preduzece-artikli.component.html',
  styleUrls: ['./preduzece-artikli.component.css']
})
export class PreduzeceArtikliComponent implements OnInit {
  artikli : Array<Artikal> = new Array<Artikal>();
  kategorije: Array<Kategorija> = new Array<Kategorija>();
  nadkategorije: Array<Kategorija> = new Array<Kategorija>();
  podkategorije: Array<Kategorija> = new Array<Kategorija>();
  dialogRef: MatDialogRef<DialogDodajArtikalComponent>
  dialogRef2: MatDialogRef<DodajKategorijuDialogComponent>
  filterNaziv = "";

  constructor(private servis : PreduzeceService, private dialog: MatDialog, private dialog2: MatDialog) {
  }

  ngOnInit(): void {
    this.artikli = [];
    this.kategorije = [];
    this.nadkategorije = [];
    this.podkategorije = [];
    this.servis.dohvatiArtikle(JSON.parse(localStorage.getItem("korisnik")).pib).subscribe((res)=>{
      let data = JSON.parse(JSON.stringify(res))
      for(const a of data){
        this.artikli.push(a);
      }
    });
    this.servis.dohvatiKategorije(JSON.parse(localStorage.getItem("korisnik")).pib).subscribe((res)=>{
      let data = JSON.parse(JSON.stringify(res))
      for(const k of data){
        this.kategorije.push(k)
      }
      for(const kat of this.kategorije){
        if(kat.nadkategorija === "") {
          this.nadkategorije.push(kat);
        } else {
          this.podkategorije.push(kat);
        }
      }
    });
  }

  dodajPod(kat: string){
    this.dialogRef2 = this.dialog.open(DodajKategorijuDialogComponent, {
      width: '300px',
      height: '300px',
      data: {
        'pib': JSON.parse(localStorage.getItem("korisnik")).pib,
        "nad": kat
      }
    })

    this.dialogRef2.afterClosed().subscribe((res)=>{
      this.ngOnInit();
    })
  }
  
  dodajArt(kat: string){
    this.dialogRef = this.dialog.open(DialogDodajArtikalComponent, {
      width: '330px',
      height: '400px',
      data: {
        "artikli": JSON.stringify(this.artikli),
        "kategorija": kat
      }
    });
    this.dialogRef.afterClosed().subscribe((res)=>{
      this.ngOnInit();
    })
  }

  dodajKat(){
    this.dialogRef2 = this.dialog.open(DodajKategorijuDialogComponent, {
      width: '300px',
      height: '300px',
      data: {
        'pib': JSON.parse(localStorage.getItem("korisnik")).pib,
        "nad": ""
      }
    })

    this.dialogRef2.afterClosed().subscribe((res)=>{
      this.ngOnInit();
    })
  }

}
