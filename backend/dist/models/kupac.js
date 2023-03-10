"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Kupac = new Schema({
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
    brLK: {
        type: String
    },
    korime: {
        type: String
    },
});
exports.default = mongoose_1.default.model('Kupac', Kupac, 'kupci');
//# sourceMappingURL=kupac.js.map