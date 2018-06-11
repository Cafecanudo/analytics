"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const errorHandlerApi_1 = require("./errorHandlerApi");
const routes_1 = require("./routes");
const console_util_1 = require("../utils/console.util");
require('../config/env/str');
const env = require('../config/env/config')();
class Api {
    constructor() {
        this.app = express();
        this.mongoDb = `mongodb://${env.database.host}${env.database.port ? `:${env.database.port || 27017}` : ''}/${env.database.databasename}`;
        this.connectMongoDb();
    }
    connectMongoDb() {
        console_util_1.default.info('Conectando banco de dados[MongoDB]...');
        mongoose.connect(this.mongoDb, { user: env.database.username, pass: env.database.password }, (err => {
            if (!err) {
                console_util_1.default.info('Conectado MongoDB=OK.');
                console_util_1.default.info('Criando modelo de dados no banco...');
                this.configure();
                this.routes();
            }
            else {
                console_util_1.default.error('Conectado MongoDB=FAIL');
                console_util_1.default.error(err);
            }
        }));
    }
    configure() {
        console_util_1.default.info('Configurando aplicação[Middlewares]...');
        if ((process.env.NODE_ENV || 'development') === 'development') {
            this.app.use(logger('dev'));
        }
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(errorHandlerApi_1.errorHandlerApi);
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors({
            origin: `${env.frontend.protocolo || 'http'}://${env.frontend.host}${env.frontend.port ? `:${env.frontend.port}` : ''}`,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            optionsSuccessStatus: 204
        }));
    }
    showHost() {
        console_util_1.default.info(`ELDOC-Analytics is UP on http://${env.server.hostname}:${env.server.port} ###`);
    }
    routes() {
        console_util_1.default.info('Registrando rotas...');
        new routes_1.default(this.app);
    }
}
exports.default = new Api().app;
//# sourceMappingURL=api.js.map