"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Preduzece = new Schema({
    naziv: {
        type: String
    },
    prvi: {
        type: Boolean
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    lozinka: {
        type: String
    },
    telefon: {
        type: String
    },
    email: {
        type: String
    },
    korime: {
        type: String
    },
    drzava: {
        type: String
    },
    grad: {
        type: String
    },
    postanski: {
        type: Number
    },
    status: {
        type: String
    },
    ulica: {
        type: String
    },
    pib: {
        type: Number
    },
    maticni: {
        type: Number
    },
    kategorija: {
        type: String
    },
    sifre: {
        type: Array
    },
    pdv: {
        type: Boolean
    },
    racuni: {
        type: Array
    },
    magacini: {
        type: Array
    },
    kase: {
        type: Array
    },
    narucioci: {
        type: Array
    },
    slika: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Preduzece', Preduzece, 'preduzeca');
//# sourceMappingURL=preduzece.js.map