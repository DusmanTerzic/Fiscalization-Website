import express from 'express'
import {AdminController} from '../controllers/admin.controller'

const adminRouter = express.Router();

adminRouter.route('/login').post(
    (req, res) => new AdminController().login(req, res)
)

adminRouter.route('/deaktiviraj').post(
    (req, res) => new AdminController().deaktiviraj(req, res)
)

adminRouter.route('/aktiviraj').post(
    (req, res) => new AdminController().aktiviraj(req, res)
)

adminRouter.route('/dodajKupca').post(
    (req, res) => new AdminController().dodajKupca(req, res)
)

adminRouter.route('/dohvatiPreduzeca').post(
    (req, res) => new AdminController().dohvatiPreduzeca(req, res)
)

adminRouter.route('/getAllRacuni').post(
    (req, res) => new AdminController().getAllRacuni(req, res)
)

export default adminRouter;