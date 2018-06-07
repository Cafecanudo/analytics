/**
 * Interface do modelo
 */
import * as mongoose from 'mongoose';
export interface IConfiguracaoModel extends mongoose.Document {
    version: string;
    lastUpdate: Date;
}
export interface IModel {
    configuracao: mongoose.Model<IConfiguracaoModel>;
}
/**
 * Criando schema de dados
 * @type {module:mongoose.Schema}
 */
export declare var configuracaoSchema: mongoose.Schema;
