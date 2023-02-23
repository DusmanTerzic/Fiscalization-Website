import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Adresa = new Schema({
    drzava: {
        type: String
    },
    grad: {
        type: String
    },
    postanski: {
        type: Number
    }
})

export default mongoose.model('Adresa', Adresa,'adrese');