const uniqueValidator = require('mongoose-unique-validator');
const restful = require('node-restful');
const mongoose = restful.mongoose;

const perfil = {
    desc_perfil: {
        type: String, maxlength: 100, required: true
    }
};

const usuario = {
    username: {
        type: String,
        minlength: 6,
        maxlength: 15,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 65
    },
    lastLogin: {
        type: Date,
        required: true,
        default: Date.now
    },
    perfil: perfil
};

const schemaModel = new mongoose.Schema(usuario);
schemaModel.plugin(uniqueValidator);

//Criando modelo
module.exports = restful.model('usuario', schemaModel);