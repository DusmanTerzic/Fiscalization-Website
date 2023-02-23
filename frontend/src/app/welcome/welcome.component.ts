import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../admin.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private servis: AdminService) {
    
  }

  racuni = []

  openLogIn(){
    this.dialogRef.open(LoginComponent);
  }

  openRegister(){
    this.dialogRef.open(RegisterComponent)
  }

  ngOnInit(): void {
    this.servis.getAllRacuni().subscribe((res)=>{
      this.racuni = JSON.parse(JSON.stringify(res));
      this.racuni.sort((a, b)=>{
        let ad = (new Date(a.datum)).getTime();
        let bd = (new Date(b.datum)).getTime();
        return bd - ad;
      })
    })
  }

}
