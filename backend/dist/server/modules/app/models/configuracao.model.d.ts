import * as mongoose from 'mongoose';
/**
 * Interface do modelo
 */
export interface IConfiguracaoModel extends mongoose.Document {
    version: string;
    lastUpdate: Date;
}
/**
 * Registrando schema de dados
 * @type {module:mongoose.Model<IConfiguracaoModel>}
 */
export declare const ConfSchema: mongoose.Model<IConfiguracaoModel>;
