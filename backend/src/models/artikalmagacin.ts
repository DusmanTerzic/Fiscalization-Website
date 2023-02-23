import mongoose from 'mongoose'

const Schema = mongoose.Schema;

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
})

export default mongoose.model('ArtikalMagacin', ArtikalMagacin,'artikalMagacin');