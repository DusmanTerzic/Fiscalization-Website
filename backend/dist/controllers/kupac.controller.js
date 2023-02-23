"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KupacController = void 0;
const racun_1 = __importDefault(require("../models/racun"));
const artikalmagacin_1 = __importDefault(require("../models/artikalmagacin"));
class KupacController {
    constructor() {
        this.dohvatiArtikalMagacine = (req, res) => {
            let pib = req.body.pib;
            artikalmagacin_1.default.find({ 'pib': pib }, (err, arr) => {
                if (err)
                    console.log(err);
                else {
                    console.log(arr);
                    res.json(arr);
                }
            });
        };
        this.dohvRacune = (req, res) => {
            let brLk = req.body.brLk;
            racun_1.default.find({ 'brLk': brLk }, (err, arr) => {
                if (err)
                    console.log(err);
                else {
                    console.log(arr);
                    res.json(arr);
                }
            });
        };
    }
}
exports.KupacController = KupacController;
//# sourceMappingURL=kupac.controller.js.map