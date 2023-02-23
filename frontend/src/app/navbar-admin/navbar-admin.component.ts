import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Output()
  componentSelected: EventEmitter<string> = new EventEmitter<string>(); //event emituje izabranu
  componentSelectedValue: string = "info"; //izabrana komponenta navbara

  onZahtjeviSelected(){
    this.componentSelectedValue="zahtjevi";
    this.componentSelected.emit("zahtjevi");
  }

  onPregledSelected(){
    this.componentSelectedValue="pregled";
    this.componentSelected.emit("pregled");
  }

  onDodavanjeSelected(){
    this.componentSelectedValue="dodavanje";
    this.componentSelected.emit("dodavanje");
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
