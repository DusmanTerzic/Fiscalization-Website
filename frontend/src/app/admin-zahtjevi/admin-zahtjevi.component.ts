import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-admin-zahtjevi',
  templateUrl: './admin-zahtjevi.component.html',
  styleUrls: ['./admin-zahtjevi.component.css']
})
export class AdminZahtjeviComponent implements OnInit {

  constructor(private predServis : PreduzeceService, private adminServis: AdminService) { }

  ngOnInit(): void {
    this.adminServis.dohvatiPreduzeca().subscribe((res)=>{
      this.preduzeca = JSON.parse(JSON.stringify(res));
    })
  }

  aktiviraj(pib){
    this.adminServis.aktiviraj(pib).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  deaktiviraj(pib){
    this.adminServis.deaktiviraj(pib).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  preduzeca = [];

}
