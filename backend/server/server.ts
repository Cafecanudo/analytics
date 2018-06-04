import * as http from 'http';
import Api from './api/api';
import { errorHandlerApi } from './api/errorHandlerApi';

console.log('Loading settings...');
const config = require('./config/env/config')();
const server = http.createServer(Api);

Api.use(errorHandlerApi);

console.log(config);

server.listen(config.server.port, () => {
    console.log('\n--> Backend ELDOC-Analytics iniciado na porta: ' +
        `http://${config.server.hostname}:${config.server.port} <--`);
    console.log('\n####################################################################');
});
