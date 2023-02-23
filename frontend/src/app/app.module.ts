import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { NavbarWelcomeComponent } from './navbar-welcome/navbar-welcome.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { PreduzeceComponent } from './preduzece/preduzece.component';
import { NavbarPreduzeceComponent } from './navbar-preduzece/navbar-preduzece.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarKupacComponent } from './navbar-kupac/navbar-kupac.component';
import { PreduzeceInfoComponent } from './preduzece-info/preduzece-info.component';
import { PreduzeceNaruciociComponent } from './preduzece-narucioci/preduzece-narucioci.component';
import { PreduzeceRobeComponent } from './preduzece-robe/preduzece-robe.component';
import { PreduzeceArtikliComponent } from './preduzece-artikli/preduzece-artikli.component';
import { PreduzeceStoloviComponent } from './preduzece-stolovi/preduzece-stolovi.component';
import { PreduzeceIzdavanjeComponent } from './preduzece-izdavanje/preduzece-izdavanje.component';
import { PreduzecePregledComponent } from './preduzece-pregled/preduzece-pregled.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { KupacComponent } from './kupac/kupac.component';
import { KupacInfoComponent } from './kupac-info/kupac-info.component';
import { KupacPregledComponent } from './kupac-pregled/kupac-pregled.component';
import { KupacRacuniComponent } from './kupac-racuni/kupac-racuni.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPregledComponent } from './admin-pregled/admin-pregled.component';
import { AdminDodavanjeComponent } from './admin-dodavanje/admin-dodavanje.component';
import { AdminZahtjeviComponent } from './admin-zahtjevi/admin-zahtjevi.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';
import { DialogHiddenLoginComponent } from './dialog-hidden-login/dialog-hidden-login.component';
import { FirstLogDialogComponent } from './first-log-dialog/first-log-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { DialogDodajArtikalComponent } from './dialog-dodaj-artikal/dialog-dodaj-artikal.component';
import { DodajKategorijuDialogComponent } from './dodaj-kategoriju-dialog/dodaj-kategoriju-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
    NavbarWelcomeComponent,
    PreduzeceComponent,
    NavbarPreduzeceComponent,
    NavbarAdminComponent,
    NavbarKupacComponent,
    PreduzeceInfoComponent,
    PreduzeceNaruciociComponent,
    PreduzeceRobeComponent,
    PreduzeceArtikliComponent,
    PreduzeceStoloviComponent,
    PreduzeceIzdavanjeComponent,
    PreduzecePregledComponent,
    KupacComponent,
    KupacInfoComponent,
    KupacPregledComponent,
    KupacRacuniComponent,
    AdminComponent,
    AdminPregledComponent,
    AdminDodavanjeComponent,
    AdminZahtjeviComponent,
    RegisterDialogComponent,
    ChangePasswordDialogComponent,
    DialogHiddenLoginComponent,
    FirstLogDialogComponent,
    InfoDialogComponent,
    DialogDodajArtikalComponent,
    DodajKategorijuDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
