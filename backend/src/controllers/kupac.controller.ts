import * as express from 'express'
import Racun from '../models/racun';
import ArtikalMagacin from '../models/artikalmagacin';

export class KupacController{

    dohvatiArtikalMagacine = (req: express.Request, res: express.Response)=>{
        let pib = req.body.pib;

        ArtikalMagacin.find({'pib': pib}, (err, arr)=>{
            if(err) console.log(err);
            else{
                console.log(arr);
                res.json(arr);
            }
        })
    }

    dohvRacune = (req: express.Request, res: express.Response)=>{
    let brLk = req.body.brLk;
    Racun.find({'brLk': brLk}, (err, arr)=>{
        if(err) console.log(err);
        else{
            console.log(arr);
            res.json(arr);
        }
    })
    }


}