import * as http from 'http';
import Api from './api/api';
import { errorHandlerAPI } from './api/errorHandlerAPI';

console.log('Loading settings...');
const config = require('./config/env/config')();
const server = http.createServer(Api);

Api.use(errorHandlerAPI);

server.listen(config.server.port, config.server.hostname, () => {
    console.log('\n--> Backend ELDOC-Analytics iniciado na porta: ' +
        `http://${config.server.hostname}:${config.server.port} <--`);
    console.log('\n####################################################################');
});
