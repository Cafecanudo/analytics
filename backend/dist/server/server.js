"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const http = require("http");
const api_1 = require("./api/api");
const console_util_1 = require("./utils/console.util");
debug('ts-express:server');
const env = require('./config/env/config')();
const server = http.createServer(api_1.default);
const normalizePort = (val) => {
    const port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    }
    else if (port >= 0) {
        return port;
    }
    else {
        return false;
    }
};
const onError = (error) => {
    console_util_1.default.error(`Ocorreu um erro: ${error}`);
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch (error.code) {
        case 'EACCES':
            console.error(`${env.server.port} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${env.server.port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
};
server.listen(env.server.port, env.server.hostname);
server.on('listening', () => {
    console_util_1.default.info(`### ELDOC-Analytics is UP on http://${env.server.hostname}:${env.server.port} ###`);
    console_util_1.default.info('####################################################################');
});
server.on('error', onError);
