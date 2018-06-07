/**
 * Interface do modelo
 */
//import { Document, Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IConfiguracaoModel extends mongoose.Document {
    version: string;
    lastUpdate: Date;
}

// export interface IModel {
//     configuracao: mongoose.Model<IConfiguracaoModel>;
// }

/**
 * Criando schema de dados
 * @type {module:mongoose.Schema}
 */
export var configuracaoSchema: mongoose.Schema = new mongoose.Schema({
    version: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: Date,
        required: true
    }
});

// class ModeBase<T extends mongoose.Document> {
//
//     private _model: mongoose.Model<T extends mongoose.Document>;
//
//     constructor(dbName: string, schema: mongoose.Schema) {
//         this._model = mongoose.model<T>(dbName, schema);
//     }
// }
