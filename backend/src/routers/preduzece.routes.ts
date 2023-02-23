import express from 'express'
import { fileURLToPath } from 'url';
import {PreduzeceController} from '../controllers/preduzece.controller'

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req: any, file: any, callBack: any) => {
        callBack(null, '../frontend/src/assets/images')
    },
    filename: (req: any, file: any, callBack: any) => {
        callBack(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


const preduzeceRouter = express.Router();

preduzeceRouter.route('/').post(
    (req, res) => new PreduzeceController().test(req, res)
)

preduzeceRouter.route('/deleteKasa').post(
    (req, res) => new PreduzeceController().deleteKasa(req, res)
)

preduzeceRouter.route('/updateKat').post(
    (req, res) => new PreduzeceController().updateKat(req, res)
)

preduzeceRouter.route('/updatePDV').post(
    (req, res) => new PreduzeceController().updatePDV(req, res)
)

preduzeceRouter.route('/deleteMagacin').post(
    (req, res) => new PreduzeceController().deleteMagacin(req, res)
)

preduzeceRouter.route('/deleteZiroRacun').post(
    (req, res) => new PreduzeceController().deleteZiroRacun(req, res)
)

preduzeceRouter.route('/registracija').post(
    upload.single('slika'),
    (req, res) => new PreduzeceController().registruj(req, res)
)

preduzeceRouter.route('/dohvatiPreduzece').post(
    (req, res) => new PreduzeceController().dohvati(req, res)
)

preduzeceRouter.route('/dohvatiPreduzeceMail').post(
    (req, res) => new PreduzeceController().dohvatiMail(req, res)
)

preduzeceRouter.route('/prviLog').post(
    (req, res) => new PreduzeceController().prviLog(req, res)
)

preduzeceRouter.route('/updateIme').post(
    (req, res) => new PreduzeceController().updateIme(req, res)
)

preduzeceRouter.route('/updateMail').post(
    (req, res) => new PreduzeceController().updateMail(req, res)
)

preduzeceRouter.route('/updateTelefon').post(
    (req, res) => new PreduzeceController().updateTelefon(req, res)
)

preduzeceRouter.route('/dohvatiArtikle').post(
    (req, res) => new PreduzeceController().dohvatiArtikle(req, res)
)

preduzeceRouter.route('/dohvatiKategorije').post(
    (req, res) => new PreduzeceController().dohvatiKategorije(req, res)
)

preduzeceRouter.route('/insertSifra').post(
    (req, res) => new PreduzeceController().insertSifra(req, res)
)

preduzeceRouter.route('/insertRacun').post(
    (req, res) => new PreduzeceController().insertRacun(req, res)
)

preduzeceRouter.route('/insertMagacin').post(
    (req, res) => new PreduzeceController().insertMagacin(req, res)
)

preduzeceRouter.route('/insertKasa').post(
    (req, res) => new PreduzeceController().insertKasa(req, res)
)

preduzeceRouter.route('/updateNarucioci').post(
    (req, res) => new PreduzeceController().updateNarucioci(req, res)
)

preduzeceRouter.route('/izbrisiArtKategoriji').post(
    (req, res) => new PreduzeceController().izbrisiArtKategoriji(req, res)
)

preduzeceRouter.route('/pretragaPIB').post(
    (req, res) => new PreduzeceController().pretragaPIB(req, res)
)

preduzeceRouter.route('/dodajArtikal').post(
    (req, res) => new PreduzeceController().dodajArtikal(req, res)
)

preduzeceRouter.route('/dodajArtikalSlika').post(
    upload.single('slika'),
    (req, res) => new PreduzeceController().dodajArtikalSlika(req, res)
)

preduzeceRouter.route('/dodajArtikalKategoriji').post(
    (req, res) => new PreduzeceController().dodajArtikalKategoriji(req, res)
)
preduzeceRouter.route('/izbrisiArtikal').post(
    (req, res) => new PreduzeceController().izbrisiArtikal(req, res)
)

preduzeceRouter.route('/ubaciKategoriju').post(
    (req, res) => new PreduzeceController().ubaciKategoriju(req, res)
)

preduzeceRouter.route('/dodajArtikalMagacinu').post(
    (req, res) => new PreduzeceController().dodajArtikalMagacinu(req, res)
)

preduzeceRouter.route('/dohvatiArtikalMagacin').post(
    (req, res) => new PreduzeceController().dohvatiArtikalMagacin(req, res)
)

preduzeceRouter.route('/updatujArtikalMagacinu').post(
    (req, res) => new PreduzeceController().updatujArtikalMagacinu(req, res)
)

preduzeceRouter.route('/getAllArtikalMagacin').post(
    (req, res) => new PreduzeceController().getAllArtikalMagacin(req, res)
)

preduzeceRouter.route('/getAllRacuni').post(
    (req, res) => new PreduzeceController().getAllRacuni(req, res)
)

preduzeceRouter.route('/napraviRacun').post(
    (req, res) => new PreduzeceController().napraviRacun(req, res)
)



export default preduzeceRouter;