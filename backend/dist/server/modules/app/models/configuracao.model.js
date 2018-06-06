"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
/**
 * Criando schema de dados
 * @type {module:mongoose.Schema}
 */
const schema = new mongoose.Schema({
    version: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: Date,
        required: true
    }
});
/**
 * Registrando schema de dados
 * @type {module:mongoose.Model<IConfiguracaoModel>}
 */
exports.ConfSchema = mongoose.model('configuracao', schema, 'herous', true);
/*
/!**
 * Criando classe do modelo
 *!/
export class ConfiguracaoModel {

    constructor(public model: IConfiguracaoModel) {
        console.log('ddddddddddd');
    }
}

/!**
 * Tornando imutal para metodos futuros
 *!/
Object.seal(ConfiguracaoModel);*/
