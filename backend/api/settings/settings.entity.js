const restful = require('node-restful');
const mongoose = restful.mongoose;

const schema = {
    version: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: Date,
        required: true
    }
};

//Criando modelo
module.exports = restful.model('Settings', new mongoose.Schema(schema));