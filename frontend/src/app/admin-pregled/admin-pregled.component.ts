import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-pregled',
  templateUrl: './admin-pregled.component.html',
  styleUrls: ['./admin-pregled.component.css']
})
export class AdminPregledComponent implements OnInit {

  constructor(private servis: AdminService) { }

  ngOnInit(): void {
    this.servis.getAllRacuni().subscribe((res)=>{
        this.racuni = JSON.parse(JSON.stringify(res));
        this.allRacuni = this.racuni;
    })
  }

  allRacuni = [];
  pib: string;
  naziv: string;
  datumOd: Date;
  datumDo: Date;
  racuni = [];
  searchResults = [];

  pretraga(){
    this.datumDo = new Date(this.datumDo);
    this.searchResults = [];
    this.datumOd = new Date(this.datumOd);
    let datumPom = new Date(this.datumOd);
    let i = 0;
    let naziv = this.naziv;
    this.racuni = this.allRacuni;
    while(datumPom.getDate() != this.datumDo.getDate() || datumPom.getMonth() != this.datumDo.getMonth() || datumPom.getFullYear() != this.datumDo.getFullYear()){
      if(this.pib === undefined || this.pib===null){
        this.pib = ""
      }
      if(this.naziv === undefined || this.naziv===null){
        this.naziv = "Sva preduzeca"
      }
      let iznos = 0;
      let pdv = 0;
      let num = 0;
      let set = false;
      for(let rac of this.racuni){
        if(this.pib !== ""){
          if(rac.pib != this.pib)
            continue;
        }
        if(this.naziv !== "Sva preduzeca"){
          if(rac.preduzece != this.naziv)
            continue;
        }
        let tmp = new Date(rac.datum)
        if(tmp.getDate() == datumPom.getDate() && tmp.getMonth() == datumPom.getMonth() && tmp.getFullYear() == datumPom.getFullYear()){
          iznos += rac.ukupna;
          if(rac.ukupanPorez != null){
            pdv += rac.ukupanPorez
            num++;
          }
          set = true;
        }
      }
      if(num != 0)
        pdv = pdv/num;
      else
        pdv = 0;
      if(set){
        this.searchResults[i] = {
          datum: datumPom,
          pib: this.pib,
          naziv: this.naziv,
          iznos: iznos,
          pdv: pdv
        }
        i++;
      }
        
      datumPom.setDate(datumPom.getDate()+1);
    }
    
  }

}
