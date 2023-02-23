"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const kupac_1 = __importDefault(require("../models/kupac"));
const admin_1 = __importDefault(require("../models/admin"));
const preduzece_1 = __importDefault(require("../models/preduzece"));
const racun_1 = __importDefault(require("../models/racun"));
class AdminController {
    constructor() {
        this.login = (req, res) => {
            let korime = req.body.korime;
            let lozinka = req.body.lozinka;
            admin_1.default.findOne({ "korime": korime, "lozinka": lozinka }, (err, admin) => {
                if (err)
                    console.log(err);
                else
                    res.json(admin);
            });
        };
        this.aktiviraj = (req, res) => {
            let pib = req.body.pib;
            preduzece_1.default.updateOne({ pib: pib }, { $set: { status: "aktivan" } }, (err1, k) => {
                if (err1)
                    console.log(err1);
                else
                    res.status(200).json({ 'message': 'ok' });
            });
        };
        this.deaktiviraj = (req, res) => {
            let pib = req.body.pib;
            preduzece_1.default.updateOne({ pib: pib }, { $set: { status: "neaktivan" } }, (err1, k) => {
                if (err1)
                    console.log(err1);
                else
                    res.status(200).json({ 'message': 'ok' });
            });
        };
        this.dohvatiPreduzeca = (req, res) => {
            preduzece_1.default.find((err, arr) => {
                console.log(arr);
                res.json(arr);
            });
        };
        this.getAllRacuni = (req, res) => {
            racun_1.default.find((err, arr) => {
                console.log(arr);
                res.json(arr);
            });
        };
        this.dodajKupca = (req, res) => {
            let korime = req.body.korime;
            let lozinka = req.body.lozinka;
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let telefon = req.body.telefon;
            let brLk = req.body.brLk;
            let k = new kupac_1.default({
                korime: korime,
                lozinka: lozinka,
                ime: ime,
                prezime: prezime,
                telefon: telefon,
                brLK: brLk
            });
            let message = "";
            console.log(req.body);
            kupac_1.default.findOne({ 'korime': korime }, (err, kor) => {
                if (err)
                    console.log(err);
                else {
                    if (kor != null)
                        message += "Postoji korisnik sa ovim imenom";
                }
                if (message === "") {
                    k.save().then(a => {
                        console.log(a);
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
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map