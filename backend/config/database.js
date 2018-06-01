require('./message.error');
const port = null;
const host = 'localhost';
const database = 'eldoc-analytics';
const mongoose = require('mongoose');
console.log(`Connecting Mongodb [${host}:${port || 27017}/${database}]...`);
module.exports = mongoose.connect(`mongodb://${host}:${port || 27017}/${database}`);