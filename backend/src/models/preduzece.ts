import mongoose from 'mongoose'

const Schema = mongoose.Schema;

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
})

export default mongoose.model('Preduzece', Preduzece,'preduzeca');