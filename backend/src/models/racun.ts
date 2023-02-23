import mongoose from 'mongoose'

const Schema = mongoose.Schema;

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
})

export default mongoose.model('Racun', Racun, 'racuni');