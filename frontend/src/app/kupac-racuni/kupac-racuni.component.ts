import { Component, OnInit } from '@angular/core';
import { KupacService } from '../kupac.service';

@Component({
  selector: 'app-kupac-racuni',
  templateUrl: './kupac-racuni.component.html',
  styleUrls: ['./kupac-racuni.component.css']
})
export class KupacRacuniComponent implements OnInit {

  constructor(private servisKup: KupacService) { 
    this.detaljiClicked = false;
    servisKup.dohvRacune(JSON.parse(localStorage.getItem("korisnik")).brLK).subscribe((res)=>{
      this.racuni = JSON.parse(JSON.stringify(res));
    })
  }

  detalji(i){
    this.detaljanPrikaz = {
      stavke : this.racuni[i].detalji,
      datum: new Date(this.racuni[i].datum),
      ukupno: this.racuni[i].ukupna
    }
    this.detaljiClicked = true;
  }

  racuni = [];
  detaljanPrikaz;
  detaljiClicked: boolean = false;

  ngOnInit(): void {
  }

}
