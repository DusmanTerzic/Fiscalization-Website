import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'app-navbar-kupac',
  templateUrl: './navbar-kupac.component.html',
  styleUrls: ['./navbar-kupac.component.css']
})
export class NavbarKupacComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Output()
  componentSelected: EventEmitter<string> = new EventEmitter<string>(); //event emituje izabranu
  componentSelectedValue: string = "info"; //izabrana komponenta navbara

  onInfoSelected(){
    this.componentSelectedValue="info";
    this.componentSelected.emit("info");
  }

  onPregledSelected(){
    this.componentSelectedValue="pregled";
    this.componentSelected.emit("pregled");
  }

  onRacuniSelected(){
    this.componentSelectedValue="racuni";
    this.componentSelected.emit("racuni");
  }

  promjenaLozinke(){
    this.dialog.open(ChangePasswordDialogComponent, {
      height: '350px',
      width: '400px',
    });
  }

  onLogOutSelected(){
    localStorage.removeItem("korisnik");
    this.router.navigate([""]);
  }
}
