import { Component, OnInit } from '@angular/core';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-preduzece-pregled',
  templateUrl: './preduzece-pregled.component.html',
  styleUrls: ['./preduzece-pregled.component.css']
})
export class PreduzecePregledComponent implements OnInit {

  constructor(private servis: PreduzeceService) { }

  ngOnInit(): void {
    this.servis.getAllRacuni(JSON.parse(localStorage.getItem("korisnik")).pib).subscribe((res)=>{
      this.racuni = JSON.parse(JSON.stringify(res));
      let now = new Date(Date.now());
      for(let rac of this.racuni){
        rac.datum = new Date(rac.datum);
        if(rac.datum.getDate() === now.getDate() && rac.datum.getMonth() === now.getMonth() && rac.datum.getFullYear() === now.getFullYear()){
          this.dnevniPazar+=rac.ukupna;
          if(rac.ukupanPorez !== null)
            this.dnevniPorez += rac.ukupanPorez
        }
      }
    })
  }

  dnevniPorez: number = 0;
  dnevniPazar: number = 0;
  racuni = [];

}
