import { SelectionModel } from '@angular/cdk/collections';
import { Component, NgZone, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { Artikal } from '../models/artikal.model';
import { ArtikalMagacin } from '../models/artikalMagacin.model';
import { Magacin } from '../models/magacin.model';
import { PreduzeceService } from '../preduzece.service';
import * as _ from 'lodash';



@Component({
  selector: 'app-preduzece-robe',
  templateUrl: './preduzece-robe.component.html',
  styleUrls: ['./preduzece-robe.component.css']
})
export class PreduzeceRobeComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _ngZone: NgZone, private servis: PreduzeceService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['slika', 'sifra', 'naziv', 'jedinica', 'porez', 'proizvodjac'];
  artikli: Array<Object> = new Array<Object>();
  dataSource;
  selection;
  porSlika: string = "";
  slikaSelected: boolean = false;
  artikal: Artikal;
  disabled: Array<boolean> = new Array<boolean>();
  slika: File = null;
  unos: boolean = false;
  izmjena: boolean = false;
  pib: string;
  sifra: string;
  naziv: string;
  jedinica: string;
  porez: string;
  kat: string;
  kategorije;
  zemlja: string = "";
  nazivstr: string = "";
  barkod: number = 0;
  proizvodjac: string = "";
  tarifa: string = "";
  min: number = 0;
  max: number = 0;
  dek: string = "";
  opis: string = "";
  eko: boolean = false;
  akcize: boolean = false;
  poruka: string = "";
  selected;
  magacini: Array<Magacin> = new Array<Magacin>();
  length: number;
  kupovne: Array<string> = new Array<string>();
  prodajne: Array<string> = new Array<string>();
  stanja: Array<string> = new Array<string>();
  mins: Array<number> = new Array<number>();
  maxs: Array<number> = new Array<number>();
  enabled: boolean = false;
  sel: FormControl = new FormControl(0);
  selectedMagArt;
  formMagacini: Array<any> = new Array<any>();

  changeTab() {
    this.sel.setValue(2);
 } 



  ngAfterViewInit(): void {
    this.slikaSelected = false;
    this.unos = false;
    this.izmjena = false;
    this.enabled = false;
    this.selectedMagArt = [];
    this.servis.dohvatiKategorije(JSON.parse(localStorage.getItem("korisnik")).pib).subscribe((res)=>{
      this.kategorije = res;
      this.formMagacini = [];
      this.sel.setValue(0)
      for(let i = 0; i<this.disabled.length; i++){
        this.disabled[i] = false;
      }
      this.pib = JSON.parse(localStorage.getItem("korisnik")).pib;
      this.magacini = JSON.parse(localStorage.getItem("korisnik")).magacini;
      this.length = this.magacini.length;
      this.servis.dohvatiArtikle(this.pib).subscribe((res)=>{
        let data = JSON.parse(JSON.stringify(res))
        this.artikli = data;
        this.dataSource = new MatTableDataSource<Object>(this.artikli);
        this.dataSource.paginator = this.paginator;
        this.selection  = new SelectionModel<Object>(false, []);
      })
    });
    
  }

  dodaj(){
    this.poruka = "";
    //provjera prezimena
    if(this.sifra === undefined){
      this.poruka += "Unesite šifru\n";
    } 

    if(this.kat === undefined){
      this.poruka += "Odaberite kategoriju\n";
    } 

    if(this.naziv === undefined){
      this.poruka += "Unesite naziv\n";
    } 

    if(this.jedinica === undefined){
      this.poruka += "Unesite jedinicu\n";
    } 

    if(this.porez === undefined){
      this.poruka += "Unesite stopu poreza\n";
    } 

    if(this.poruka === ""){
      let slikaPath = "default.jpg"
      if(this.slikaSelected){
        slikaPath = this.naziv+'-'+this.sifra + '.' + this.slika.name.split('?')[0].split('.').pop();
      }
      this.artikal = {
        naziv: this.naziv,
        sifra: this.sifra,
        jedinica: this.jedinica,
        stopa: parseInt(this.porez),
        slika: slikaPath,
        kategorija: this.kat,
        porijeklo: this.zemlja,
        straniNaziv: this.nazivstr,
        barkod: this.barkod,
        proizvodjac: this.proizvodjac,
        tarifa: this.tarifa,
        eko: this.eko,
        akcize: this.akcize,
        minZalihe: this.min,
        maxZalihe: this.max,
        opis: this.opis,
        deklaracija: this.dek,
        pib: this.pib
      }
      if(!this.slikaSelected){
        this.servis.dodajArtikal(this.artikal).subscribe((res)=>{
          if(res['message'] === "ok"){
            this.servis.dodajArtikalKategoriji(this.artikal.naziv, this.kat).subscribe((res)=>{
              this.enabled = true;
              this.changeTab();
            })
          } else {
            this.poruka+=res['message'];  //ako postoji kor sa tim imenom/mailom ulazi se ovdje
          }
        });
      } else {
        this.servis.dodajArtikalSlika(this.artikal, this.slika).subscribe((res)=>{
          if(res['message'] === "ok"){
            this.servis.dodajArtikalKategoriji(this.artikal.naziv, this.kat).subscribe((res)=>{
              this.enabled = true;
              this.changeTab();
            })
          } else {
            this.poruka+=res['message'];  //ako postoji kor sa tim imenom/mailom ulazi se ovdje
          }
        });
      }
      
    }

  }

  zavrsiUnos(){
    this.ngAfterViewInit();
  }

  unesi(){
    this.unos = true
    this.izmjena = false;
  }

  izmijeni(){
    this.izmjena = true;
    this.unos = false;
  }

  dodajMagArt(i: number, magId:number, magNaziv: string){
    this.servis.dodajArtikalMagacinu(magId, magNaziv, this.artikal.naziv, this.artikal.sifra, this.artikal.jedinica, this.artikal.stopa, this.artikal.proizvodjac,
                this.kupovne[i], this.prodajne[i], this.stanja[i], this.mins[i], this.maxs[i]).subscribe((res)=>{
                  this.disabled[i] = true;
                })
  }

  updateMagArt(i: number, magId: number, magNaziv: string){
    this.servis.updatujArtikalMagacinu(magId, magNaziv, this.selected.naziv, this.selected.sifra, this.artikal.jedinica, this.artikal.stopa, this.artikal.proizvodjac,
      this.kupovne[i], this.prodajne[i], this.stanja[i], this.mins[i], this.maxs[i]).subscribe((res)=>{
        this.disabled[i] = true;
      })
  }
  
  izbrisi(){
    const ref = this.dialog.open(InfoDialogComponent, {data:"potvrdaBrisanje"})
    let potvrda;
    ref.afterClosed().subscribe((res)=>{
      potvrda = res.close;
      if(potvrda){
        this.servis.izbrisiArtikal(this.selected.pib, this.selected.sifra).subscribe((res)=>{
          this.servis.izbrisiArtikalKategoriji(this.selected.naziv, this.selected.kategorija).subscribe((res)=>{
            this.ngAfterViewInit();
          })
        });
      }
    })
  }

  updatuj(){
    this.izbrisi();
    this.dodaj();
  }



  select(row){
    this.formMagacini = [];
    this.selection.toggle(row)
    this.selected = row;
    let kor = JSON.parse(localStorage.getItem("korisnik"));
    this.servis.dohvatiArtikalMagacin(this.selected.sifra, kor.magacini, kor.pib).subscribe((res)=>{
      let data = JSON.parse(JSON.stringify(res))
      let i = 0;
      for(let mag of kor.magacini){
        let pushed = false;
        i = 0;
        for(let tmp of data){
          if(mag.id === tmp.idMag){
            this.formMagacini.push({
              id: mag.id,
              naziv: mag.naziv,
              kupovna: tmp.kupovna,
              max: tmp.max,
              min: tmp.min,
              prodajna: tmp.prodajna,
              stanje: tmp.stanje
            })
            pushed = true;
          } 
        }
        i++;
        if(!pushed)
          this.formMagacini.push({
            id: mag.id,
            naziv: mag.naziv,
            kupovna: "",
            max: 0,
            min: 0,
            prodajna:"",
            stanje: ""
          })
      }
    });
  }

  onChange(event) {
    this.slikaSelected = true;
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
