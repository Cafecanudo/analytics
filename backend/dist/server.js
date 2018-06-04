"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var errorHandlerApi_1 = require("./api/errorHandlerApi");
console.log('Loading settings...');
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
api_1.default.use(errorHandlerApi_1.errorHandlerApi);
console.log(config);
server.listen(config.server.port, function () {
    console.log('\n--> Backend ELDOC-Analytics iniciado na porta: ' +
        ("http://" + config.server.hostname + ":" + config.server.port + " <--"));
    console.log('\n####################################################################');
});
