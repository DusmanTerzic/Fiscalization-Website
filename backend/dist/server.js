"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const preduzece_routes_1 = __importDefault(require("./routers/preduzece.routes"));
const preduzece_1 = __importDefault(require("./models/preduzece"));
const kupac_1 = __importDefault(require("./models/kupac"));
const admin_routes_1 = __importDefault(require("./routers/admin.routes"));
const admin_1 = __importDefault(require("./models/admin"));
const kupac_routes_1 = __importDefault(require("./routers/kupac.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/fiskalizacija');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connection ok');
});
const router = express_1.default.Router();
router.use('/preduzece', preduzece_routes_1.default);
router.use('/admin', admin_routes_1.default);
router.use('/kupac', kupac_routes_1.default);
app.use('/', router);
router.route('/dohvatiKorisnika').post((req, res) => {
    let korime = req.body.korime;
    let lozinka = req.body.lozinka;
    preduzece_1.default.findOne({ "korime": korime, "lozinka": lozinka }, (err, pred) => {
        if (err)
            console.log(err);
        else {
            if (pred) {
                res.json(pred);
            }
            else {
                kupac_1.default.findOne({ "korime": korime, "lozinka": lozinka }, (err, kup) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(kup);
                });
            }
        }
    });
});
router.route('/promjena').post((req, res) => {
    let korime = req.body.korime;
    let lozinka = req.body.lozinka;
    let tip = req.body.tip;
    if (tip === "preduzece") {
        preduzece_1.default.collection.updateOne({ "korime": korime }, { $set: { "lozinka": lozinka } });
    }
    else if (tip === "kupac") {
        kupac_1.default.collection.updateOne({ "korime": korime }, { $set: { "lozinka": lozinka } });
    }
    else {
        admin_1.default.collection.updateOne({ "korime": korime }, { $set: { "lozinka": lozinka } });
    }
    res.json({ poruka: "ok" });
});
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map