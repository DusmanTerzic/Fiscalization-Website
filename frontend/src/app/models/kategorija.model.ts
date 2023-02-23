export class Kategorija{
    naziv: string;
    potkategorije: Array<string>;  //niz naziva potkategorija
    nadkategorija: string;
    artikli: Array<string>; //niz naziva artikala
    pib: string; //identifikator preduzeća
}