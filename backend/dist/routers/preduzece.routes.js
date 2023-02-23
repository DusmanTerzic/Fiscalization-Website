"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const preduzece_controller_1 = require("../controllers/preduzece.controller");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../frontend/src/assets/images');
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
const preduzeceRouter = express_1.default.Router();
preduzeceRouter.route('/').post((req, res) => new preduzece_controller_1.PreduzeceController().test(req, res));
preduzeceRouter.route('/deleteKasa').post((req, res) => new preduzece_controller_1.PreduzeceController().deleteKasa(req, res));
preduzeceRouter.route('/updateKat').post((req, res) => new preduzece_controller_1.PreduzeceController().updateKat(req, res));
preduzeceRouter.route('/updatePDV').post((req, res) => new preduzece_controller_1.PreduzeceController().updatePDV(req, res));
preduzeceRouter.route('/deleteMagacin').post((req, res) => new preduzece_controller_1.PreduzeceController().deleteMagacin(req, res));
preduzeceRouter.route('/deleteZiroRacun').post((req, res) => new preduzece_controller_1.PreduzeceController().deleteZiroRacun(req, res));
preduzeceRouter.route('/registracija').post(upload.single('slika'), (req, res) => new preduzece_controller_1.PreduzeceController().registruj(req, res));
preduzeceRouter.route('/dohvatiPreduzece').post((req, res) => new preduzece_controller_1.PreduzeceController().dohvati(req, res));
preduzeceRouter.route('/dohvatiPreduzeceMail').post((req, res) => new preduzece_controller_1.PreduzeceController().dohvatiMail(req, res));
preduzeceRouter.route('/prviLog').post((req, res) => new preduzece_controller_1.PreduzeceController().prviLog(req, res));
preduzeceRouter.route('/updateIme').post((req, res) => new preduzece_controller_1.PreduzeceController().updateIme(req, res));
preduzeceRouter.route('/updateMail').post((req, res) => new preduzece_controller_1.PreduzeceController().updateMail(req, res));
preduzeceRouter.route('/updateTelefon').post((req, res) => new preduzece_controller_1.PreduzeceController().updateTelefon(req, res));
preduzeceRouter.route('/dohvatiArtikle').post((req, res) => new preduzece_controller_1.PreduzeceController().dohvatiArtikle(req, res));
preduzeceRouter.route('/dohvatiKategorije').post((req, res) => new preduzece_controller_1.PreduzeceController().dohvatiKategorije(req, res));
preduzeceRouter.route('/insertSifra').post((req, res) => new preduzece_controller_1.PreduzeceController().insertSifra(req, res));
preduzeceRouter.route('/insertRacun').post((req, res) => new preduzece_controller_1.PreduzeceController().insertRacun(req, res));
preduzeceRouter.route('/insertMagacin').post((req, res) => new preduzece_controller_1.PreduzeceController().insertMagacin(req, res));
preduzeceRouter.route('/insertKasa').post((req, res) => new preduzece_controller_1.PreduzeceController().insertKasa(req, res));
preduzeceRouter.route('/updateNarucioci').post((req, res) => new preduzece_controller_1.PreduzeceController().updateNarucioci(req, res));
preduzeceRouter.route('/izbrisiArtKategoriji').post((req, res) => new preduzece_controller_1.PreduzeceController().izbrisiArtKategoriji(req, res));
preduzeceRouter.route('/pretragaPIB').post((req, res) => new preduzece_controller_1.PreduzeceController().pretragaPIB(req, res));
preduzeceRouter.route('/dodajArtikal').post((req, res) => new preduzece_controller_1.PreduzeceController().dodajArtikal(req, res));
preduzeceRouter.route('/dodajArtikalSlika').post(upload.single('slika'), (req, res) => new preduzece_controller_1.PreduzeceController().dodajArtikalSlika(req, res));
preduzeceRouter.route('/dodajArtikalKategoriji').post((req, res) => new preduzece_controller_1.PreduzeceController().dodajArtikalKategoriji(req, res));
preduzeceRouter.route('/izbrisiArtikal').post((req, res) => new preduzece_controller_1.PreduzeceController().izbrisiArtikal(req, res));
preduzeceRouter.route('/ubaciKategoriju').post((req, res) => new preduzece_controller_1.PreduzeceController().ubaciKategoriju(req, res));
preduzeceRouter.route('/dodajArtikalMagacinu').post((req, res) => new preduzece_controller_1.PreduzeceController().dodajArtikalMagacinu(req, res));
preduzeceRouter.route('/dohvatiArtikalMagacin').post((req, res) => new preduzece_controller_1.PreduzeceController().dohvatiArtikalMagacin(req, res));
preduzeceRouter.route('/updatujArtikalMagacinu').post((req, res) => new preduzece_controller_1.PreduzeceController().updatujArtikalMagacinu(req, res));
preduzeceRouter.route('/getAllArtikalMagacin').post((req, res) => new preduzece_controller_1.PreduzeceController().getAllArtikalMagacin(req, res));
preduzeceRouter.route('/getAllRacuni').post((req, res) => new preduzece_controller_1.PreduzeceController().getAllRacuni(req, res));
preduzeceRouter.route('/napraviRacun').post((req, res) => new preduzece_controller_1.PreduzeceController().napraviRacun(req, res));
exports.default = preduzeceRouter;
//# sourceMappingURL=preduzece.routes.js.map