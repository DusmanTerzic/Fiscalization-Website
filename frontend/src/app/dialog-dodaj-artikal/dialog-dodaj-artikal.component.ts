import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-dialog-dodaj-artikal',
  templateUrl: './dialog-dodaj-artikal.component.html',
  styleUrls: ['./dialog-dodaj-artikal.component.css']
})
export class DialogDodajArtikalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private servis: PreduzeceService, 
    public dialogRef: MatDialogRef<DialogDodajArtikalComponent>) { 
      this.artikli = JSON.parse(data.artikli);
      this.allArtikli = this.artikli;
    }

  
  ngOnInit(): void {
  }

  artikli: any;
  allArtikli: any;
  poruka: string = "";
  errorPoruka: string = "";
  filterNaziv: string = "";

  filter(){
    if(this.filterNaziv !== ""){
      this.artikli = this.allArtikli.filter(art => art.naziv.toUpperCase().includes(this.filterNaziv.toUpperCase()))
    } else {
      this.artikli = this.allArtikli;
    }
  }

  dodajArt(art){
    if(art.kategorija === ""){
      this.servis.dodajArtikalKategoriji(art.naziv, this.data.kategorija).subscribe((res)=>{
        this.poruka = "Uspješno je dodat proizvod " + art.naziv;
        this.dialogRef.close();
      })
    } else {
      this.errorPoruka = "Artikal je već dodijeljen kategoriji!";
    }
  }
}
