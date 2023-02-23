import { Adresa } from "./adresa.model";
import { Kasa } from "./kasa.model";
import { Korisnik } from "./korisnik.model";
import { Magacin } from "./magacin.model";
import { Narucioc } from "./narucioc.model";
import { Sifra } from "./sifra.model";
import { ZiroRacun } from "./ziroRacun.model";

export class Preduzece{
    ime: string;
    prezime: string;
    korime: string;
    lozinka: string;
    naziv: string;
    telefon: string;
    pib: string;
    maticni: string;
    email: string;
    status: string;
    prvi: boolean;
    adresa: Adresa;
    kategorija: string;
    sifre: Array<Sifra>;
    pdv: boolean;
    racuni: Array<ZiroRacun>;
    magacini: Array<Magacin>;
    kase: Array<Kasa>;
    narucioci: Array<Narucioc>;
    slika: string;
}