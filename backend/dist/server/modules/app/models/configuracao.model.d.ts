/**
 * Interface do modelo
 */
import { Document, Schema, Model } from 'mongoose';
export interface IConfiguracaoModel extends Document {
    version: string;
    lastUpdate: Date;
}
/**
 * Criando schema de dados
 * @type {module:mongoose.Schema}
 */
export declare const schema: Schema;
/**
 * Registrando schema de dados
 * @type {module:mongoose.Model<IConfiguracaoModel>}
 */
export declare var ConfiguracaoSchema: Model<IConfiguracaoModel>;
