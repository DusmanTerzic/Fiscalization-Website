"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let ArtikalMagacin = new Schema({
    idMag: {
        type: Number
    },
    nazivMag: {
        type: String
    },
    nazivArt: {
        type: String
    },
    jedinica: {
        type: String
    },
    proizvodjac: {
        type: String
    },
    stopa: {
        type: Number
    },
    sifraArt: {
        type: Number
    },
    kupovna: {
        type: String
    },
    prodajna: {
        type: String
    },
    stanje: {
        type: String
    },
    min: {
        type: String
    },
    max: {
        type: String
    },
    pib: {
        type: String
    }
});
exports.default = mongoose_1.default.model('ArtikalMagacin', ArtikalMagacin, 'artikalMagacin');
//# sourceMappingURL=artikalmagacin.js.map