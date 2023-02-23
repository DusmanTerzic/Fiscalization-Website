import mongoose from 'mongoose'

const Schema = mongoose.Schema;

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
    slika:{
        type: String
    }
})

export default mongoose.model('Artikal', Artikal,'artikli');