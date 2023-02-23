import { Component, OnInit } from '@angular/core';
import { KupacService } from '../kupac.service';
import { PreduzeceService } from '../preduzece.service';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-kupac-pregled',
  templateUrl: './kupac-pregled.component.html',
  styleUrls: ['./kupac-pregled.component.css']
})
export class KupacPregledComponent implements OnInit {

  constructor(private predServis: PreduzeceService, private kupServis: KupacService, private adServis: AdminService) { 
    adServis.dohvatiPreduzeca().subscribe((res)=>{
      this.preduzeca = JSON.parse(JSON.stringify(res));
      this.preduzecaAll = this.preduzeca;
      for(let i = 0; i<this.preduzeca.length; i++){
        kupServis.dohvatiArtikalMagacine(this.preduzeca[i].pib).subscribe((res)=>{
          this.preduzeca[i].artikli = res;
        })
      }
    })
  }


  filter(){
    this.preduzeca = [];
    let pret;
    for(let pred of this.preduzecaAll){
      let tmp = JSON.parse(JSON.stringify(pred));
      let artikli = [];
      if(this.nazivSearch !== "" && this.proizvodjacSearch !== ""){
        for(let art of tmp.artikli){
          if(art.nazivArt.toUpperCase().includes(this.nazivSearch.toUpperCase()) && art.proizvodjac.toUpperCase().includes(this.proizvodjacSearch.toUpperCase())){
            artikli.push(art);
          }
        }
      } else if(this.nazivSearch !== ""){
        for(let art of tmp.artikli){
          if(art.nazivArt.toUpperCase().includes(this.nazivSearch.toUpperCase())){
            artikli.push(art);
          }
        }
      } else if(this.proizvodjacSearch !== ""){
        for(let art of tmp.artikli){
          if(art.proizvodjac.toUpperCase().includes(this.proizvodjacSearch.toUpperCase())){
            artikli.push(art);
          }
        }
      } else {
        for(let art of tmp.artikli){
          artikli.push(art);
        }
      }
      tmp.artikli = artikli;
      this.preduzeca.push(tmp);
    }
  }

  ngOnInit(): void {

  }

  preduzeca = [];
  preduzecaAll = [];
  artikli = [];
  nazivSearch = "";
  proizvodjacSearch = "";



}
