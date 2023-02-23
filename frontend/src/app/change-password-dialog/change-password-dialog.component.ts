import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css']
})
export class ChangePasswordDialogComponent implements OnInit {

  constructor(private router: Router, private servis: UserService, public dialogRef: MatDialogRef<ChangePasswordDialogComponent>) { }

  ngOnInit(): void {
  }

  success: boolean = false;
  stara: string;
  nova: string;
  potvrda: string;
  poruka: string;

  ok(){
    this.dialogRef.close();
  }

  promijeniLozinku(){
    this.poruka = "";
    let kor = JSON.parse(localStorage.getItem("korisnik"));
    let tip;
    if(kor.email !== undefined){
      tip = "preduzece"
    } else if (kor.brLK !== undefined){
      tip = "kupac"
    } else tip = "admin";

    if(this.nova === undefined){
      this.poruka += "Unesite novu lozinku\n";
    } else if (!/^(?=.{8,12})(?=.*[a-z])(?=.*)(?=.*[A-Z])(?=.*[@#$%^&+='{}<>?]).*$/.test(this.nova)){
          this.poruka += "Lozinka mora imati najmanje 8, a najvise 12 karaktera, početi slovom i imati bar jedno veliko slovo, malo slovo, broj i specijalni karakter!\n";
    }

    if(this.stara === undefined){
      this.poruka += "Unesite staru lozinku\n";
    }

    if(this.potvrda === undefined){
      this.poruka += "Unesite ponovo novu lozinku\n";
    }

    if(kor.lozinka !== this.stara){
      this.poruka += "Niste unijeli korektnu lozinku!\n"
    }

    if(this.nova !== this.potvrda){
      this.poruka += "Potvrda lozinke nije ista kao lozinka!\n"
    }

    if(this.nova === this.stara){
      this.poruka += "Nova lozinka ne smije biti ista kao stara! \n";
    }

    if(this.poruka === ""){
      this.servis.promjenaLozinke(kor.korime, this.nova, tip).subscribe((res)=>{
        localStorage.removeItem("korisnik");
        this.success = true;
        this.dialogRef.updateSize("300px", "260px");
        this.router.navigate(['']);
      });
    }
  }

}
