import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dialog-hidden-login',
  templateUrl: './dialog-hidden-login.component.html',
  styleUrls: ['./dialog-hidden-login.component.css']
})
export class DialogHiddenLoginComponent implements OnInit {

  constructor(private router: Router, private servis: UserService, public dialogRef: MatDialogRef<DialogHiddenLoginComponent>) { }

  korime: string;
  lozinka: string;
  poruka: string;

  ngOnInit(): void {
  }

  login(){
    this.poruka = ""
    
    if(this.korime === undefined){
      this.poruka += "Unesite korisničko ime\n"
    }

    if(this.lozinka === undefined){
      this.poruka += "Unesite lozinku\n"
    }

    if(this.poruka === ""){
      this.servis.loginAdmin(this.korime, this.lozinka).subscribe((res)=>{
        if(res){
          localStorage.setItem("korisnik", JSON.stringify(res));
          this.router.navigate(['admin']);
          this.dialogRef.close();
        } else {
          this.poruka += "Neispravni podaci\n"
        }
      })
    }
  }

}
