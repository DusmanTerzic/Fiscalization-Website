import express from 'express'
import {KupacController} from '../controllers/kupac.controller'

const kupacRouter = express.Router();

kupacRouter.route('/dohvatiArtikalMagacine').post(
    (req, res) => new KupacController().dohvatiArtikalMagacine(req, res)
)

kupacRouter.route('/dohvRacune').post(
    (req, res) => new KupacController().dohvRacune(req, res)
)

export default kupacRouter;