"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var errorHandlerApi_1 = require("./errorHandlerApi");
var morgan = require("morgan");
var Api = /** @class */ (function () {
    function Api() {
        this.express = Express();
        this.middleware();
    }
    Api.prototype.middleware = function () {
        this.express.use(morgan(process.env.ENV || 'dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi_1.errorHandlerApi);
        this.router(this.express);
    };
    Api.prototype.router = function (app) {
        new routes_1.default(app);
    };
    return Api;
}());
exports.default = new Api().express;
