"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Racun = new Schema({
    ukupanPorez: {
        type: Number
    },
    preduzece: {
        type: String
    },
    pib: {
        type: String
    },
    datum: {
        type: Date
    },
    placanje: {
        type: String
    },
    brLk: {
        type: String
    },
    slip: {
        type: Number
    },
    narucioc: {
        type: String
    },
    vrijednost: {
        type: Number
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    detalji: {
        type: Array
    },
    ukupna: {
        type: Number
    },
    kusur: {
        type: Number
    },
    magacin: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Racun', Racun, 'racuni');
//# sourceMappingURL=racun.js.map