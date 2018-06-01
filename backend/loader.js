console.log('\n############## ELDOC ANALYTICS #####################################\n');
console.log('Loading settings...');
const server = require('./config/server');
require('./config/database');
require('./config/router')(server);