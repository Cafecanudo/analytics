"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* by Wellton Barros */
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
//Adicionando rotas
const errorHandlerApi_1 = require("./errorHandlerApi");
const routes_1 = require("./routes/routes");
const console_util_1 = require("../utils/console.util");
//somente require
require('../config/env/str');
//import locais
const env = require('../config/env/config')();
class Api {
    constructor() {
        this.app = express();
        this.mongoDb = `mongodb://${env.database.host}${env.database.port ? `:${env.database.port || 27017}` : ''}/${env.database.databasename}`;
        this.connectMongoDb();
    }
    connectMongoDb() {
        console_util_1.default.info('Conectando bando de dados[MongoDB]...');
        mongoose.connect(this.mongoDb, { user: env.database.username, pass: env.database.password }, (err => {
            if (!err) {
                console_util_1.default.info('Conectado MongoDB=OK.');
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
        if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
            this.app.use(logger('dev'));
        }
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(errorHandlerApi_1.errorHandlerApi);
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        // cors
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', `${env.frontend.protocolo || 'http'}://${env.frontend.host}${env.frontend.port ? `:${env.frontend.port}` : ''}`);
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
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
