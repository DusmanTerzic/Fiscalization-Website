import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preduzece } from '../models/preduzece.model';
import { UserService } from '../user.service';
import { Kupac } from '../models/kupac.model';
import { MatDialog } from '@angular/material/dialog';
import { FirstLogDialogComponent } from '../first-log-dialog/first-log-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private servis: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  korime: string;
  lozinka: string;
  poruka: string;
  pred: Preduzece;
  kup: Kupac;

  login(){
    this.poruka = ""
    
    if(this.korime === undefined){
      this.poruka += "Unesite korisničko ime\n"
    }

    if(this.lozinka === undefined){
      this.poruka += "Unesite lozinku\n"
    }

    if(this.poruka === ""){
      this.servis.login(this.korime, this.lozinka).subscribe((res)=>{
        if(res){
          let helper = JSON.parse(JSON.stringify(res));
          console.log(res);
          if(helper.email != null){ //radi se o preduzecu
            if(helper.status === "aktivan"){
              this.pred = {
                ime: helper.ime,
                prezime: helper.prezime,
                prvi: helper.prvi,
                korime: helper.korime,
                lozinka: helper.lozinka,
                email: helper.email,
                status: helper.status,
                slika: helper.slika,
                adresa: {
                  drzava: helper.drzava,
                  grad: helper.grad,
                  ulica: helper.ulica,
                  postanski: parseInt(helper.postanski)
                },
                telefon: helper.telefon,
                naziv: helper.naziv,
                pib: helper.pib,
                maticni: helper.maticni,
                pdv: helper.pdv,
                kategorija: helper.kategorija, //po defaultu
                magacini: helper.magacini,
                kase: helper.kase,
                sifre: helper.sifre,
                racuni: helper.racuni,
                narucioci: helper.narucioci
              }
              localStorage.setItem("korisnik", JSON.stringify(this.pred));
              if(helper.prvi){ //ako je prvi log in u pitanju
                this.dialog.open(FirstLogDialogComponent, {width: "600", height: "600"})
              } else {
                this.router.navigate(['preduzece']);
              }
            } else {
              this.poruka = "Vaš profil još uvijek nije odobren. Sačekajte da ga administratori odobre."
            }
            
          } else { //radi se o kupcu
            this.kup = {
              ime: helper.ime,
              prezime: helper.prezime,
              korime: helper.korime,
              lozinka: helper.lozinka,
              telefon: helper.telefon,
              brLK: helper.brLK
            }
            localStorage.setItem("korisnik", JSON.stringify(this.kup));
            this.router.navigate(['kupac']);
          }
        } else {
          this.poruka = "Neispravni podaci za login. Pokušajte ponovo."
        }
      });
    }

  }
}
