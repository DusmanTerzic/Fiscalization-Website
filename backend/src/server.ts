import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import preduzeceRouter from './routers/preduzece.routes';
import Preduzece from './models/preduzece';
import Kupac from './models/kupac';
import adminRouter from './routers/admin.routes';
import Admin from './models/admin';
import kupacRouter from './routers/kupac.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/fiskalizacija')
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok')
})

const router = express.Router();
router.use('/preduzece', preduzeceRouter)
router.use('/admin', adminRouter)
router.use('/kupac', kupacRouter)
app.use('/', router);

router.route('/dohvatiKorisnika').post((req, res)=>{
    let korime = req.body.korime;
    let lozinka = req.body.lozinka;

    Preduzece.findOne({"korime": korime, "lozinka": lozinka},  (err, pred) => {
        if (err) console.log(err);
        else {
            if(pred){
                res.json(pred);
            } else {
                Kupac.findOne({"korime": korime, "lozinka": lozinka}, (err, kup) =>{
                    if(err) console.log(err);
                    else res.json(kup);
                })
            }
        }
    });
})


router.route('/promjena').post((req, res)=>{
    let korime = req.body.korime;
    let lozinka = req.body.lozinka;
    let tip = req.body.tip;

    if(tip === "preduzece"){
        Preduzece.collection.updateOne({ "korime": korime }, { $set: { "lozinka": lozinka } });
    } else if (tip === "kupac"){
        Kupac.collection.updateOne({ "korime": korime }, { $set: { "lozinka": lozinka } });
    } else {
        Admin.collection.updateOne({ "korime": korime }, { $set: { "lozinka": lozinka } });
    }

    res.json({ poruka: "ok" });
})

app.listen(4000, () => console.log(`Express server running on port 4000`));