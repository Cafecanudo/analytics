"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var str = require('./config/env/str');
console.log(str.strEldoc);
var api_1 = require("./api/api");
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
server.listen(config.server.port, config.server.hostname);
server.on('listening', function () {
    console.log("Backend ELDOC-Analytics is UP on host: http://" + config.server.hostname + ":" + config.server.port);
    console.log('####################################################################');
});
server.on('error', function (error) { return console.log("Ocorreu um erro: " + error); });
