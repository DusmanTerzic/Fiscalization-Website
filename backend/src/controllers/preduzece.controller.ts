import * as express from 'express'
import Artikal from '../models/artikal';
import Preduzece from '../models/preduzece'
import Kategorija from '../models/kategorija'
import ArtikalMagacin from '../models/artikalmagacin';
import Racun from '../models/racun';

export class PreduzeceController{
    test = (req: express.Request, res: express.Response)=>{
        
    }

    dohvatiArtikle = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;

        Artikal.find({'pib': pib}, (err, arr)=>{
            if(err) console.log(err);
            else{
                console.log(arr);
                res.json(arr);
            }
        })
    }

    deleteKasa = (req: express.Request, res: express.Response)=>{
        let kase = req.body.kase;
        let pib = req.body.pib;

        Preduzece.updateOne({"pib": pib}, {$set : {"kase": kase}}).then(a=>{
            if(a) res.status(200).json({'message': 'ok'})
            else res.status(400).json({'message':'error'})
        })
    }

    updateKat = (req: express.Request, res: express.Response)=>{
        let k = req.body.k;
        let pib = req.body.pib;

        Preduzece.updateOne({"pib": pib}, {$set : {"kategorija": k}}).then(a=>{
            if(a) res.status(200).json({'message': 'ok'})
            else res.status(400).json({'message':'error'})
        })
    }

    updatePDV = (req: express.Request, res: express.Response)=>{
        let k = req.body.k;
        let pib = req.body.pib;

        Preduzece.updateOne({"pib": pib}, {$set : {"pdv": k}}).then(a=>{
            if(a) res.status(200).json({'message': 'ok'})
            else res.status(400).json({'message':'error'})
        })
    }

    deleteMagacin = (req: express.Request, res: express.Response)=>{
        let magacini = req.body.magacini;
        let pib = req.body.pib;

        Preduzece.updateOne({"pib": pib}, {$set : {"magacini": magacini}}).then(a=>{
            if(a) res.status(200).json({'message': 'ok'})
            else res.status(400).json({'message':'error'})
        })
    }

    deleteZiroRacun = (req: express.Request, res: express.Response)=>{
        let racuni = req.body.racuni;
        let pib = req.body.pib;
        Preduzece.updateOne({"pib": pib}, {$set : {"racuni": racuni}}).then(a=>{
            if(a) res.status(200).json({'message': 'ok'})
            else res.status(400).json({'message':'error'})
        })
    }

    dodajArtikalKategoriji = (req: express.Request, res: express.Response)=>{
        let nazivKat = req.body.kategorija;
        let artikal = req.body.artikal;
        
        Kategorija.collection.updateOne(
            { naziv: nazivKat },
            { $push: { artikli: artikal } },
            (err, kat)=>{
                if(err) console.log(err);
                else{
                Artikal.collection.updateOne({naziv: artikal}, {$set: {kategorija: nazivKat}}, (err1, k)=>{
                    if(err1) console.log(err1)
                    else res.status(200).json({'message': 'ok'});
                });
                }
            }
         )
    }

    izbrisiArtKategoriji = (req: express.Request, res: express.Response)=>{
        let nazivKat = req.body.kategorija;
        let artikal = req.body.naziv;
        let pib = req.body.pib;
        console.log(req.body);

        Kategorija.findOneAndUpdate(
            { naziv: nazivKat,
              pib: pib},
            { $pull:{ artikli: {$eq: artikal}}},
            (err, kat)=>{
                console.log(kat);
                if(err) console.log(err);
                else res.status(200).json({'message': 'ok'});
            }
         )
    }

    dodajArtikalMagacinu = (req: express.Request, res: express.Response)=>{
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

        let toInsert = new ArtikalMagacin ({
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
        })
        console.log(toInsert);
        toInsert.save().then(a=>{
            if(a) res.status(200).json({'message': 'ok'})
            else res.status(400).json({'message':'error'})
        })
    }

    updatujArtikalMagacinu = (req: express.Request, res: express.Response)=>{
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
        ArtikalMagacin.updateOne({"idMag": idMag, "sifraArt": sifra, "pib": pib}, {$set: {
                                                        "stanje": stanje,
                                                        "min": min,
                                                        "max":max,
                                                        "kupovna": kupovna,
                                                        "prodajna": prodajna,
                                                        "jedinica" : jedinica,
                                                        "stopa": stopa,
                                                        "proizvodjac": proizvodjac
                                                        }}).then(a=>{
                                                            if(a) res.status(200).json({'message': 'ok'})
                                                            else res.status(400).json({'message':'error'})
                                                        })
    }

    ubaciKategoriju= (req: express.Request, res: express.Response)=>{
        let nad = req.body.nad;
        let naziv = req.body.naziv;
        let pib = req.body.pib;

        let kategorija = new Kategorija({
            naziv: naziv,
            pib: pib,
            nadkategorija: nad,
            potkategorije: [],
            artikli: []
        })

        kategorija.save().then(kategorija=>{
            res.status(200).json({'message': 'ok'});
        }).catch(err=>{
            res.status(400).json({'message':'error'});
        })
    }

    dohvatiKategorije = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;
        console.log(pib);
        Kategorija.find({'pib': pib}, (err, arr)=>{
            if(err) console.log(err);
            else{
                console.log(arr);
                res.json(arr);
            }
        })
    }

    dohvati = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;

        Preduzece.findOne({'korime': korime}, (err, pred)=>{
            if(err) console.log(err);
            else{
                res.json(pred);
            }
        })
    }

    dodajArtikal = (req: express.Request, res: express.Response)=>{
        let artikal = req.body.artikal;
        let message = "";
        let toInsert = new Artikal(
            {
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
            }
        )
        Artikal.findOne({'pib': toInsert.pib, 'sifra': toInsert.sifra}, (err, art)=>{
            if(err) console.log(err);
            else{
                if(art != null) message += "Preduzece sa ovom šifrom postoji\n";
            }
            if(message === ""){
                toInsert.save().then(art=>{
                    res.status(200).json({'message': 'ok'});
                }).catch(err=>{
                    res.status(400).json({'message':'error'});
                })
            } else {
                res.status(200).json({'message': message});
            }
        })
    }

    pretragaPIB = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;

        Preduzece.findOne({'pib': pib}, (err, pred)=>{
            if(err) console.log(err);
            else{
                res.json(pred);
            }
        })
    }

    updateNarucioci = (req: express.Request, res: express.Response)=>{
        console.log(req.body.korime);
        console.log(req.body.narucioci)
        Preduzece.collection.updateOne({"korime": req.body.korime}, {$set: {"narucioci": req.body.narucioci}})
        res.json("ok");
    }

    dohvatiArtikalMagacin = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;
        let sifraArt = req.body.sifra;
        console.log(req.body);
        ArtikalMagacin.find({'pib': pib, 'sifraArt': sifraArt},(err, am) => {
            console.log(am);
            res.json(am);
        })

    }

    napraviRacun= (req: express.Request, res: express.Response)=>{
        let toInsert = new Racun(
            {
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
            }
        )

        toInsert.save().then((req)=>{
            if(req) res.json("ok");
            else res.json("error");
        })
    }

    getAllArtikalMagacin = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;
        let naziv = req.body.naziv;
        console.log(req.body);
        ArtikalMagacin.find({'pib': pib, 'nazivMag': naziv},(err, am) => {
            console.log(am);
            res.json(am);
        })

    }

    getAllRacuni = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;

        Racun.find({'pib':pib}, (err, r)=>{
            console.log(r);
            res.json(r);
        })
    }


    izbrisiArtikal = (req: express.Request, res: express.Response)=>{
        Artikal.collection.deleteOne({"pib": req.body.pib, "sifra": req.body.sifra}).then(art=>{
            ArtikalMagacin.collection.deleteMany({"pib": req.body.pib, "sifraArt": req.body.sifra}).then(am=>{
                res.status(200).json({"message":"ok"});
            })
        }).catch(err=>{
            res.status(400).json({'message':'error'});
        })
    }

    

    dohvatiMail = (req: express.Request, res: express.Response)=>{
        let email = req.body.email;

        Preduzece.findOne({'email': email}, (err, pred)=>{
            if(err) console.log(err);
            else{
                res.json(pred);
            }
        })
    }

    prviLog = (req: express.Request, res: express.Response)=>{
        Preduzece.collection.updateOne({ "korime": req.body.korime }, { $set: { "pdv": req.body.pdv,
                                                                                "kase": req.body.kase,
                                                                                "magacini": req.body.magacini,
                                                                                "kategorija": req.body.kat,
                                                                                "sifre": req.body.sifre,
                                                                                "racuni": req.body.racuni,
                                                                                "prvi": false}});
        res.json({ poruka: "ok" });
    }

    updateIme = (req: express.Request, res: express.Response)=>{
        Preduzece.collection.updateOne({ "korime": req.body.korime }, { $set: { "ime": req.body.ime,
                                                                                "prezime": req.body.Prezime
                                                                            }});
        res.json({ poruka: "ok" });
    }

    updateMail = (req: express.Request, res: express.Response)=>{
        Preduzece.collection.updateOne({ "korime": req.body.korime }, { $set: { "email": req.body.email}});
        res.json({ poruka: "ok" });
    }

    updateTelefon = (req: express.Request, res: express.Response)=>{
        Preduzece.collection.updateOne({ "korime": req.body.korime }, { $set: { "telefon": req.body.telefon}});
        res.json({ poruka: "ok" });
    }

    insertRacun = (req: express.Request, res: express.Response)=>{
        console.log(JSON.stringify(req.body.racuni));
        Preduzece.collection.updateOne({ "korime": req.body.korime }, { $set: { "racuni": req.body.racuni}});
        res.json({ poruka: "ok" });
    }

    insertKasa = (req: express.Request, res: express.Response)=>{
        console.log(JSON.stringify(req.body.kase));
        Preduzece.collection.updateOne({ "korime": req.body.korime }, { $set: { "kase": req.body.kase}});
        res.json({ poruka: "ok" });
    }

    insertMagacin = (req: express.Request, res: express.Response)=>{
        console.log(JSON.stringify(req.body.magacini));
        Preduzece.collection.updateOne({ "korime": req.body.korime }, { $set: { "magacini": req.body.magacini}});
        res.json({ poruka: "ok" });
    }

    insertSifra = (req: express.Request, res: express.Response)=>{
        console.log(JSON.stringify(req.body.sifre));
        Preduzece.collection.updateOne({ "korime": req.body.korime }, { $set: { "sifre": req.body.sifre}});
        res.json({ poruka: "ok" });
    }

    dodajArtikalSlika = (req: express.Request, res: express.Response)=>{
        let artikal = JSON.parse(req.body.artikal);
        let message = "";
        let toInsert = new Artikal(
            {
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
            }
        )
        Artikal.findOne({'pib': toInsert.pib, 'sifra': toInsert.sifra}, (err, art)=>{
            if(err) console.log(err);
            else{
                if(art != null) message += "Preduzece sa ovom šifrom postoji\n";
            }
            if(message === ""){
                toInsert.save().then(art=>{
                    res.status(200).json({'message': 'ok'});
                }).catch(err=>{
                    res.status(400).json({'message':'error'});
                })
            } else {
                res.status(200).json({'message': message});
            }
        })
    }

    registruj = (req: express.Request, res: express.Response)=>{
        console.log(req.body.preduzece);
        let helper = JSON.parse(req.body.preduzece);
        let preduzece = new Preduzece({
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
        })

        let message = ""

        Preduzece.findOne({'email': helper.email}, (err, pred)=>{
            if(err) console.log(err);
            else{
                if(pred != null) message += "Preduzeće sa datim emailom postoji\n";
            }
            Preduzece.findOne({'korime': helper.korime}, (err, pred)=>{
                if(err) console.log(err);
                else{
                    if(pred != null) message += "Preduzeće sa datim korisničkim imenom već postoji\n";
                }
                Preduzece.findOne({'pib': helper.pib}, (err, pred)=>{
                    if(err) console.log(err);
                    else{
                        if(pred != null) message += "Preduzeće sa datim PIB-om postoji\n";
                    }
                    if(message === ""){
                        preduzece.save().then(preduzece=>{
                            res.status(200).json({'message': 'ok'});
                        }).catch(err=>{
                            res.status(400).json({'message':'error'});
                        })
                    } else {
                        res.status(200).json({'message': message});
                    }
                });

                
            })
        })
    }
}