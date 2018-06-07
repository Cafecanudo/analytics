"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Interface do modelo
 */
const mongoose_1 = require("mongoose");
/**
 * Criando schema de dados
 * @type {module:mongoose.Schema}
 */
exports.schema = new mongoose_1.Schema({
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
exports.ConfiguracaoSchema = mongoose_1.model('configuracao', exports.schema, 'herouuu', true);
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
