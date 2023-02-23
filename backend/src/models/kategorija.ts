import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Kategorija = new Schema({
    naziv: {
        type: String
    },
    potkategorije: {
        type: Array
    },
    nadkategorija: {
        type: String
    },
    artikli: {
        type: Array
    },
    pib: {
        type: String
    }
})

export default mongoose.model('Kategorija', Kategorija,'kategorije');