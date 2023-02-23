import mongoose from 'mongoose'

const Schema = mongoose.Schema;

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
})

export default mongoose.model('Kupac', Kupac,'kupci');