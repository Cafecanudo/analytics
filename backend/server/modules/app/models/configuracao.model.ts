import * as mongoose from 'mongoose';

/**
 * Interface do modelo
 */
export interface IConfiguracaoModel extends mongoose.Document {
    version: string;
    lastUpdate: Date;
}

/**
 * Criando schema de dados
 * @type {module:mongoose.Schema}
 */
const schema: mongoose.Schema = new mongoose.Schema({
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
export const ConfSchema = mongoose.model<IConfiguracaoModel>('configuracao', schema, 'herous', true);
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
