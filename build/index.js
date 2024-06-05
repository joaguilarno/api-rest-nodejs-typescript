"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 1234;
app.get('/ping', (req, res) => {
    console.log('ingreso al method GET de la ruta::: /ping', 'el req es:' + req);
    res.send("respuesta");
});
app.listen(PORT, () => {
    console.log("escuchando desde el puerto: " + PORT);
});
