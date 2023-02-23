"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const kupac_controller_1 = require("../controllers/kupac.controller");
const kupacRouter = express_1.default.Router();
kupacRouter.route('/dohvatiArtikalMagacine').post((req, res) => new kupac_controller_1.KupacController().dohvatiArtikalMagacine(req, res));
kupacRouter.route('/dohvRacune').post((req, res) => new kupac_controller_1.KupacController().dohvRacune(req, res));
exports.default = kupacRouter;
//# sourceMappingURL=kupac.routes.js.map