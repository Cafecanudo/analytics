"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const api_1 = require("./api/api");
const errorHandlerAPI_1 = require("./api/errorHandlerAPI");
console.log('Loading settings...');
const config = require('./config/env/config')();
const server = http.createServer(api_1.default);
api_1.default.use(errorHandlerAPI_1.errorHandlerAPI);
server.listen(config.server.port, config.server.hostname, () => {
    console.log('\n--> Backend ELDOC-Analytics iniciado na porta: ' +
        `http://${config.server.hostname}:${config.server.port} <--`);
    console.log('\n####################################################################');
});
