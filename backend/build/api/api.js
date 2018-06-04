"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
class Api {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.router(this.express);
    }
    router(app) {
        new routes_1.default(app);
    }
}
exports.default = new Api().express;
