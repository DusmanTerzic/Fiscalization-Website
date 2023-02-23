import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar-preduzece',
  templateUrl: './navbar-preduzece.component.html',
  styleUrls: ['./navbar-preduzece.component.css']
})
export class NavbarPreduzeceComponent implements OnInit {

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

  onNaruciociSelected(){
    this.componentSelectedValue="narucioci";
    this.componentSelected.emit("narucioci");
  }

  onRobeSelected(){
    this.componentSelectedValue="robe";
    this.componentSelected.emit("robe");
  }

  onArtikliSelected(){
    this.componentSelectedValue="artikli";
    this.componentSelected.emit("artikli");
  }

  onStoloviSelected(){
    this.componentSelectedValue="stolovi";
    this.componentSelected.emit("stolovi");
  }

  onIzdavanjeSelected(){
    this.componentSelectedValue="izdavanje";
    this.componentSelected.emit("izdavanje");
  }

  onPregledSelected(){
    this.componentSelectedValue="pregled";
    this.componentSelected.emit("pregled");
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
