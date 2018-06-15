import * as debug from 'debug';
import * as http from 'http';
import Api from './api/api';
import ConsoleUtil from './utils/console.util';

debug('ts-express:server');

const env = require('./config/config')();
const server = http.createServer(Api);

const normalizePort = (val: number | string): any => {
    const port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    } else if (port >= 0) {
        return port;
    } else {
        return false;
    }
};

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

server.listen(env.server.port, env.server.hostname);
server.on('listening', () => {
    ConsoleUtil.info(`ELDOC-Analytics is UP on http://${env.server.hostname}:${env.server.port}`);
    ConsoleUtil.info('');
});
server.on('error', onError);
