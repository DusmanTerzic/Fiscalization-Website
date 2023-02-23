"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Artikal = new Schema({
    sifra: {
        type: Number
    },
    naziv: {
        type: String
    },
    jedinica: {
        type: String
    },
    stopa: {
        type: Number
    },
    kategorija: {
        type: String
    },
    porijeklo: {
        type: String
    },
    tarifa: {
        type: Number
    },
    straniNaziv: {
        type: String
    },
    proizvodjac: {
        type: String
    },
    barkod: {
        type: Number
    },
    eko: {
        type: Boolean
    },
    akcize: {
        type: Boolean
    },
    minZalihe: {
        type: Number
    },
    maxZalihe: {
        type: Number
    },
    opis: {
        type: String
    },
    pib: {
        type: String
    },
    slika: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Artikal', Artikal, 'artikli');
//# sourceMappingURL=artikal.js.map