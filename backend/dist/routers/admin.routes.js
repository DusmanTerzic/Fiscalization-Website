"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controllers/admin.controller");
const adminRouter = express_1.default.Router();
adminRouter.route('/login').post((req, res) => new admin_controller_1.AdminController().login(req, res));
adminRouter.route('/deaktiviraj').post((req, res) => new admin_controller_1.AdminController().deaktiviraj(req, res));
adminRouter.route('/aktiviraj').post((req, res) => new admin_controller_1.AdminController().aktiviraj(req, res));
adminRouter.route('/dodajKupca').post((req, res) => new admin_controller_1.AdminController().dodajKupca(req, res));
adminRouter.route('/dohvatiPreduzeca').post((req, res) => new admin_controller_1.AdminController().dohvatiPreduzeca(req, res));
adminRouter.route('/getAllRacuni').post((req, res) => new admin_controller_1.AdminController().getAllRacuni(req, res));
exports.default = adminRouter;
//# sourceMappingURL=admin.routes.js.map