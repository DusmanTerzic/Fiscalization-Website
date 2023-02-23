import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogHiddenLoginComponent } from '../dialog-hidden-login/dialog-hidden-login.component';

@Component({
  selector: 'app-navbar-welcome',
  templateUrl: './navbar-welcome.component.html',
  styleUrls: ['./navbar-welcome.component.css']
})
export class NavbarWelcomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }
  clicks: number = 0;

  hiddenFormFcn(){
    if(this.clicks++>10){
      this.clicks = 0;
      this.dialog.open(DialogHiddenLoginComponent, {
        height: '300px',
        width: '300px',
      });
    }
  }
  ngOnInit(): void {
  }

}
