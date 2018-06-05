import * as http from 'http';

const str = require('./config/env/str');
console.log(str.strEldoc);

import Api from './api/api';

const config = require('./config/env/config')();
const server = http.createServer(Api);

server.listen(config.server.port, config.server.hostname);
server.on('listening', () => {
    console.log(`Backend ELDOC-Analytics is UP on host: http://${config.server.hostname}:${config.server.port}`);
    console.log('####################################################################');
});
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
