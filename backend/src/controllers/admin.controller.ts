import * as express from 'express'
import Kupac from '../models/kupac';
import Admin from '../models/admin'
import Preduzece from '../models/preduzece';
import Racun from '../models/racun';

export class AdminController{
    login = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;
        let lozinka = req.body.lozinka;

        Admin.findOne({"korime": korime, "lozinka": lozinka},  (err, admin) => {
            if (err) console.log(err);
            else res.json(admin);
        });
    }

    aktiviraj = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;

        Preduzece.updateOne({pib: pib}, {$set: {status: "aktivan"}}, (err1, k)=>{
            if(err1) console.log(err1)
            else res.status(200).json({'message': 'ok'});
        });
    }

    deaktiviraj = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;

        Preduzece.updateOne({pib: pib}, {$set: {status: "neaktivan"}}, (err1, k)=>{
            if(err1) console.log(err1)
            else res.status(200).json({'message': 'ok'});
        });
    }

    dohvatiPreduzeca = (req: express.Request, res: express.Response)=>{
        Preduzece.find((err, arr)=>{
            console.log(arr);
            res.json(arr);
        })
    }

    getAllRacuni = (req: express.Request, res: express.Response)=>{
        Racun.find((err, arr)=>{
            console.log(arr);
            res.json(arr);
        })
    }


    dodajKupca = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;
        let lozinka = req.body.lozinka;
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let telefon = req.body.telefon;
        let brLk = req.body.brLk;

        let k = new Kupac({
            korime: korime,
            lozinka: lozinka,
            ime: ime,
            prezime: prezime,
            telefon: telefon,
            brLK : brLk
        })

        let message = "";
        console.log(req.body);

        Kupac.findOne({'korime': korime}, (err,kor)=>{
            if(err) console.log(err);
            else{
                if(kor != null) message+= "Postoji korisnik sa ovim imenom"
            }
            
            if(message === ""){
                k.save().then(a=>{
                    console.log(a);
                    res.status(200).json({'message': 'ok'});
                }).catch(err=>{
                    res.status(400).json({'message':'error'});
                })
            } else {
                res.status(200).json({'message': message});
            }
        })

    }
}