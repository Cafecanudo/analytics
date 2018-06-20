import * as debug from 'debug';
import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';

import Api from './api/api';
import ConsoleUtil from './utils/console.util';

debug('ts-express:server');

const env = require('./config/config')();
const configSSL = {
    cert: fs.readFileSync(`./server/config/env/${env.server.ssl.certificado}`, 'utf8'),
    key: fs.readFileSync(`./server/config/env/${env.server.ssl.privateKey}`, 'utf8')
};
const server = env.server.protocolo === 'https' ? https.createServer(configSSL, Api) : http.createServer(Api);
const onError = (error: NodeJS.ErrnoException): void => {
    ConsoleUtil.error(`Ocorreu um erro: ${error}`);
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
const port = env.server.protocolo === 'https' ? env.server.ssl.portssl : env.server.port;
server.listen(port, env.server.hostname);
server.on('listening', () => {
    ConsoleUtil.info(`ELDOC-Analytics is UP on ${env.server.protocolo}://${env.server.hostname}:${port}`);
    ConsoleUtil.info('');
});
server.on('error', onError);
