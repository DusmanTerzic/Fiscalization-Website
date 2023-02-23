"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreduzeceController = void 0;
const artikal_1 = __importDefault(require("../models/artikal"));
const preduzece_1 = __importDefault(require("../models/preduzece"));
const kategorija_1 = __importDefault(require("../models/kategorija"));
const artikalmagacin_1 = __importDefault(require("../models/artikalmagacin"));
const racun_1 = __importDefault(require("../models/racun"));
class PreduzeceController {
    constructor() {
        this.test = (req, res) => {
        };
        this.dohvatiArtikle = (req, res) => {
            let pib = req.body.pib;
            artikal_1.default.find({ 'pib': pib }, (err, arr) => {
                if (err)
                    console.log(err);
                else {
                    console.log(arr);
                    res.json(arr);
                }
            });
        };
        this.deleteKasa = (req, res) => {
            let kase = req.body.kase;
            let pib = req.body.pib;
            preduzece_1.default.updateOne({ "pib": pib }, { $set: { "kase": kase } }).then(a => {
                if (a)
                    res.status(200).json({ 'message': 'ok' });
                else
                    res.status(400).json({ 'message': 'error' });
            });
        };
        this.updateKat = (req, res) => {
            let k = req.body.k;
            let pib = req.body.pib;
            preduzece_1.default.updateOne({ "pib": pib }, { $set: { "kategorija": k } }).then(a => {
                if (a)
                    res.status(200).json({ 'message': 'ok' });
                else
                    res.status(400).json({ 'message': 'error' });
            });
        };
        this.updatePDV = (req, res) => {
            let k = req.body.k;
            let pib = req.body.pib;
            preduzece_1.default.updateOne({ "pib": pib }, { $set: { "pdv": k } }).then(a => {
                if (a)
                    res.status(200).json({ 'message': 'ok' });
                else
                    res.status(400).json({ 'message': 'error' });
            });
        };
        this.deleteMagacin = (req, res) => {
            let magacini = req.body.magacini;
            let pib = req.body.pib;
            preduzece_1.default.updateOne({ "pib": pib }, { $set: { "magacini": magacini } }).then(a => {
                if (a)
                    res.status(200).json({ 'message': 'ok' });
                else
                    res.status(400).json({ 'message': 'error' });
            });
        };
        this.deleteZiroRacun = (req, res) => {
            let racuni = req.body.racuni;
            let pib = req.body.pib;
            preduzece_1.default.updateOne({ "pib": pib }, { $set: { "racuni": racuni } }).then(a => {
                if (a)
                    res.status(200).json({ 'message': 'ok' });
                else
                    res.status(400).json({ 'message': 'error' });
            });
        };
        this.dodajArtikalKategoriji = (req, res) => {
            let nazivKat = req.body.kategorija;
            let artikal = req.body.artikal;
            kategorija_1.default.collection.updateOne({ naziv: nazivKat }, { $push: { artikli: artikal } }, (err, kat) => {
                if (err)
                    console.log(err);
                else {
                    artikal_1.default.collection.updateOne({ naziv: artikal }, { $set: { kategorija: nazivKat } }, (err1, k) => {
                        if (err1)
                            console.log(err1);
                        else
                            res.status(200).json({ 'message': 'ok' });
                    });
                }
            });
        };
        this.izbrisiArtKategoriji = (req, res) => {
            let nazivKat = req.body.kategorija;
            let artikal = req.body.naziv;
            let pib = req.body.pib;
            console.log(req.body);
            kategorija_1.default.findOneAndUpdate({ naziv: nazivKat,
                pib: pib }, { $pull: { artikli: { $eq: artikal } } }, (err, kat) => {
                console.log(kat);
                if (err)
                    console.log(err);
                else
                    res.status(200).json({ 'message': 'ok' });
            });
        };
        this.dodajArtikalMagacinu = (req, res) => {
            let idMag = req.body.idMag;
            let nazivMag = req.body.nazivMag;
            let nazivArt = req.body.nazivArt;
            let sifra = req.body.sifra;
            let kupovna = req.body.kupovna;
            let prodajna = req.body.prodajna;
            let stanje = req.body.stanje;
            let min = req.body.min;
            let max = req.body.max;
            let pib = req.body.pib;
            let stopa = req.body.stopa;
            let jedinica = req.body.jedinica;
            let proizvodjac = req.body.proizvodjac;
            console.log(req.body);
            let toInsert = new artikalmagacin_1.default({
                jedinica: jedinica,
                stopa: stopa,
                idMag: idMag,
                nazivMag: nazivMag,
                nazivArt: nazivArt,
                sifraArt: sifra,
                kupovna: kupovna,
                prodajna: prodajna,
                stanje: stanje,
                min: min,
                proizvodjac: proizvodjac,
                max: max,
                pib: pib
            });
            console.log(toInsert);
            toInsert.save().then(a => {
                if (a)
                    res.status(200).json({ 'message': 'ok' });
                else
                    res.status(400).json({ 'message': 'error' });
            });
        };
        this.updatujArtikalMagacinu = (req, res) => {
            let idMag = req.body.idMag;
            let nazivMag = req.body.nazivMag;
            let nazivArt = req.body.nazivArt;
            let sifra = req.body.sifra;
            let kupovna = req.body.kupovna;
            let prodajna = req.body.prodajna;
            let stanje = req.body.stanje;
            let stopa = req.body.stopa;
            let jedinica = req.body.jedinica;
            let min = req.body.min;
            let max = req.body.max;
            let pib = req.body.pib;
            let proizvodjac = req.body.proizvodjac;
            console.log(req.body);
            artikalmagacin_1.default.updateOne({ "idMag": idMag, "sifraArt": sifra, "pib": pib }, { $set: {
                    "stanje": stanje,
                    "min": min,
                    "max": max,
                    "kupovna": kupovna,
                    "prodajna": prodajna,
                    "jedinica": jedinica,
                    "stopa": stopa,
                    "proizvodjac": proizvodjac
                } }).then(a => {
                if (a)
                    res.status(200).json({ 'message': 'ok' });
                else
                    res.status(400).json({ 'message': 'error' });
            });
        };
        this.ubaciKategoriju = (req, res) => {
            let nad = req.body.nad;
            let naziv = req.body.naziv;
            let pib = req.body.pib;
            let kategorija = new kategorija_1.default({
                naziv: naziv,
                pib: pib,
                nadkategorija: nad,
                potkategorije: [],
                artikli: []
            });
            kategorija.save().then(kategorija => {
                res.status(200).json({ 'message': 'ok' });
            }).catch(err => {
                res.status(400).json({ 'message': 'error' });
            });
        };
        this.dohvatiKategorije = (req, res) => {
            let pib = req.body.pib;
            console.log(pib);
            kategorija_1.default.find({ 'pib': pib }, (err, arr) => {
                if (err)
                    console.log(err);
                else {
                    console.log(arr);
                    res.json(arr);
                }
            });
        };
        this.dohvati = (req, res) => {
            let korime = req.body.korime;
            preduzece_1.default.findOne({ 'korime': korime }, (err, pred) => {
                if (err)
                    console.log(err);
                else {
                    res.json(pred);
                }
            });
        };
        this.dodajArtikal = (req, res) => {
            let artikal = req.body.artikal;
            let message = "";
            let toInsert = new artikal_1.default({
                sifra: artikal.sifra,
                naziv: artikal.naziv,
                jedinica: artikal.jedinica,
                stopa: artikal.stopa,
                slika: artikal.slika,
                kategorija: artikal.kategorija,
                porijeklo: artikal.porijeklo,
                straniNaziv: artikal.straniNaziv,
                tarifa: artikal.tarifa,
                proizvodjac: artikal.proizvodjac,
                barkod: artikal.barkod,
                eko: artikal.eko,
                akcize: artikal.akcize,
                minZalihe: artikal.minZalihe,
                maxZalihe: artikal.maxZalihe,
                opis: artikal.opis,
                pib: artikal.pib
            });
            artikal_1.default.findOne({ 'pib': toInsert.pib, 'sifra': toInsert.sifra }, (err, art) => {
                if (err)
                    console.log(err);
                else {
                    if (art != null)
                        message += "Preduzece sa ovom šifrom postoji\n";
                }
                if (message === "") {
                    toInsert.save().then(art => {
                        res.status(200).json({ 'message': 'ok' });
                    }).catch(err => {
                        res.status(400).json({ 'message': 'error' });
                    });
                }
                else {
                    res.status(200).json({ 'message': message });
                }
            });
        };
        this.pretragaPIB = (req, res) => {
            let pib = req.body.pib;
            preduzece_1.default.findOne({ 'pib': pib }, (err, pred) => {
                if (err)
                    console.log(err);
                else {
                    res.json(pred);
                }
            });
        };
        this.updateNarucioci = (req, res) => {
            console.log(req.body.korime);
            console.log(req.body.narucioci);
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "narucioci": req.body.narucioci } });
            res.json("ok");
        };
        this.dohvatiArtikalMagacin = (req, res) => {
            let pib = req.body.pib;
            let sifraArt = req.body.sifra;
            console.log(req.body);
            artikalmagacin_1.default.find({ 'pib': pib, 'sifraArt': sifraArt }, (err, am) => {
                console.log(am);
                res.json(am);
            });
        };
        this.napraviRacun = (req, res) => {
            let toInsert = new racun_1.default({
                ime: req.body.ime,
                prezime: req.body.prezime,
                preduzece: req.body.preduzece,
                pib: req.body.pib,
                datum: req.body.datum,
                placanje: req.body.placanje,
                slip: req.body.slip,
                brLk: req.body.brLk,
                narucioc: req.body.narucioc,
                vrijednost: req.body.vrijednost,
                detalji: req.body.detalji,
                ukupna: req.body.ukupna,
                kusur: req.body.kusur,
                magacin: req.body.magacin,
                ukupanPorez: req.body.ukupanPorez
            });
            toInsert.save().then((req) => {
                if (req)
                    res.json("ok");
                else
                    res.json("error");
            });
        };
        this.getAllArtikalMagacin = (req, res) => {
            let pib = req.body.pib;
            let naziv = req.body.naziv;
            console.log(req.body);
            artikalmagacin_1.default.find({ 'pib': pib, 'nazivMag': naziv }, (err, am) => {
                console.log(am);
                res.json(am);
            });
        };
        this.getAllRacuni = (req, res) => {
            let pib = req.body.pib;
            racun_1.default.find({ 'pib': pib }, (err, r) => {
                console.log(r);
                res.json(r);
            });
        };
        this.izbrisiArtikal = (req, res) => {
            artikal_1.default.collection.deleteOne({ "pib": req.body.pib, "sifra": req.body.sifra }).then(art => {
                artikalmagacin_1.default.collection.deleteMany({ "pib": req.body.pib, "sifraArt": req.body.sifra }).then(am => {
                    res.status(200).json({ "message": "ok" });
                });
            }).catch(err => {
                res.status(400).json({ 'message': 'error' });
            });
        };
        this.dohvatiMail = (req, res) => {
            let email = req.body.email;
            preduzece_1.default.findOne({ 'email': email }, (err, pred) => {
                if (err)
                    console.log(err);
                else {
                    res.json(pred);
                }
            });
        };
        this.prviLog = (req, res) => {
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "pdv": req.body.pdv,
                    "kase": req.body.kase,
                    "magacini": req.body.magacini,
                    "kategorija": req.body.kat,
                    "sifre": req.body.sifre,
                    "racuni": req.body.racuni,
                    "prvi": false } });
            res.json({ poruka: "ok" });
        };
        this.updateIme = (req, res) => {
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "ime": req.body.ime,
                    "prezime": req.body.Prezime
                } });
            res.json({ poruka: "ok" });
        };
        this.updateMail = (req, res) => {
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "email": req.body.email } });
            res.json({ poruka: "ok" });
        };
        this.updateTelefon = (req, res) => {
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "telefon": req.body.telefon } });
            res.json({ poruka: "ok" });
        };
        this.insertRacun = (req, res) => {
            console.log(JSON.stringify(req.body.racuni));
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "racuni": req.body.racuni } });
            res.json({ poruka: "ok" });
        };
        this.insertKasa = (req, res) => {
            console.log(JSON.stringify(req.body.kase));
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "kase": req.body.kase } });
            res.json({ poruka: "ok" });
        };
        this.insertMagacin = (req, res) => {
            console.log(JSON.stringify(req.body.magacini));
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "magacini": req.body.magacini } });
            res.json({ poruka: "ok" });
        };
        this.insertSifra = (req, res) => {
            console.log(JSON.stringify(req.body.sifre));
            preduzece_1.default.collection.updateOne({ "korime": req.body.korime }, { $set: { "sifre": req.body.sifre } });
            res.json({ poruka: "ok" });
        };
        this.dodajArtikalSlika = (req, res) => {
            let artikal = JSON.parse(req.body.artikal);
            let message = "";
            let toInsert = new artikal_1.default({
                sifra: artikal.sifra,
                naziv: artikal.naziv,
                jedinica: artikal.jedinica,
                stopa: artikal.stopa,
                slika: artikal.slika,
                kategorija: artikal.kategorija,
                porijeklo: artikal.porijeklo,
                straniNaziv: artikal.straniNaziv,
                tarifa: artikal.tarifa,
                proizvodjac: artikal.proizvodjac,
                barkod: artikal.barkod,
                eko: artikal.eko,
                akcize: artikal.akcize,
                minZalihe: artikal.minZalihe,
                maxZalihe: artikal.maxZalihe,
                opis: artikal.opis,
                pib: artikal.pib
            });
            artikal_1.default.findOne({ 'pib': toInsert.pib, 'sifra': toInsert.sifra }, (err, art) => {
                if (err)
                    console.log(err);
                else {
                    if (art != null)
                        message += "Preduzece sa ovom šifrom postoji\n";
                }
                if (message === "") {
                    toInsert.save().then(art => {
                        res.status(200).json({ 'message': 'ok' });
                    }).catch(err => {
                        res.status(400).json({ 'message': 'error' });
                    });
                }
                else {
                    res.status(200).json({ 'message': message });
                }
            });
        };
        this.registruj = (req, res) => {
            console.log(req.body.preduzece);
            let helper = JSON.parse(req.body.preduzece);
            let preduzece = new preduzece_1.default({
                naziv: helper.naziv,
                ime: helper.ime,
                slika: helper.slika,
                status: "neaktivan",
                prezime: helper.prezime,
                prvi: true,
                lozinka: helper.lozinka,
                telefon: helper.telefon,
                email: helper.email,
                korime: helper.korime,
                drzava: helper.adresa.drzava,
                grad: helper.adresa.grad,
                postanski: helper.adresa.postanski,
                ulica: helper.adresa.ulica,
                pib: helper.pib,
                maticni: helper.maticni,
                pdv: false,
                kategorija: helper.kategorija,
                magacini: helper.magacini,
                racuni: helper.racuni,
                kase: helper.kase,
                sifre: helper.sifre,
                narucioci: helper.narucioci
            });
            let message = "";
            preduzece_1.default.findOne({ 'email': helper.email }, (err, pred) => {
                if (err)
                    console.log(err);
                else {
                    if (pred != null)
                        message += "Preduzeće sa datim emailom postoji\n";
                }
                preduzece_1.default.findOne({ 'korime': helper.korime }, (err, pred) => {
                    if (err)
                        console.log(err);
                    else {
                        if (pred != null)
                            message += "Preduzeće sa datim korisničkim imenom već postoji\n";
                    }
                    preduzece_1.default.findOne({ 'pib': helper.pib }, (err, pred) => {
                        if (err)
                            console.log(err);
                        else {
                            if (pred != null)
                                message += "Preduzeće sa datim PIB-om postoji\n";
                        }
                        if (message === "") {
                            preduzece.save().then(preduzece => {
                                res.status(200).json({ 'message': 'ok' });
                            }).catch(err => {
                                res.status(400).json({ 'message': 'error' });
                            });
                        }
                        else {
                            res.status(200).json({ 'message': message });
                        }
                    });
                });
            });
        };
    }
}
exports.PreduzeceController = PreduzeceController;
//# sourceMappingURL=preduzece.controller.js.map