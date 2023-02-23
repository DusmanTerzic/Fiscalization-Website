import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-dodaj-kategoriju-dialog',
  templateUrl: './dodaj-kategoriju-dialog.component.html',
  styleUrls: ['./dodaj-kategoriju-dialog.component.css']
})
export class DodajKategorijuDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private servis: PreduzeceService, 
    public dialogRef: MatDialogRef<DodajKategorijuDialogComponent>) { 
      this.pib = data.pib;
      this.nad = data.nad
    }
  
    naziv: string;
    nad: string;
    pib: string;
    poruka: string;

  ngOnInit(): void {
  }

  dodajKat(){
    this.servis.ubaciKategoriju(this.pib, this.naziv, this.nad).subscribe((res)=>{
      this.poruka = "Uspješno je dodata kategorija" + this.naziv;
      this.dialogRef.close();
    })
  }


}
