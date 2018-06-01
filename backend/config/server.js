const port = 3003;

const logger = require('morgan');
const bodyParse = require('body-parser');
const express = require('express');
const server = express();

server.use(logger('dev'));
server.use(bodyParse.urlencoded({extended: true}));
server.use(bodyParse.json());

server.listen(port, function () {
    console.log(`\n--> Backend ELDOC-Analytics iniciado na porta: ${port} <--`);
    console.log('\n####################################################################');
});

module.exports = server;