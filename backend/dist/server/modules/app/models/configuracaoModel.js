"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Interface do modelo
 */
const mongoose_1 = require("mongoose");
const repositorio_base_1 = require("../../../api/@core/repositorio.base");
// export interface IModel {
//     configuracao: mongoose.Model<IConfiguracaoModel>;
// }
/**
 * Criando schema de dados
 * @type {module:mongoose.Schema}
 */
// export var configuracaoSchema: mongoose.Schema = new mongoose.Schema({
//     version: {
//         type: String,
//         required: true
//     },
//     lastUpdate: {
//         type: Date,
//         required: true
//     }
// });
const configuracaoSchema = new mongoose_1.Schema({
    version: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: Date,
        required: true
    }
});
class ConfiguracaoRepo extends repositorio_base_1.RepositoryBase {
    constructor() {
        super('configuracao', configuracaoSchema);
    }
}
exports.ConfiguracaoRepo = ConfiguracaoRepo;
// class ModeBase<T extends mongoose.Document> {
//
//     private _model: mongoose.Model<T extends mongoose.Document>;
//
//     constructor(dbName: string, schema: mongoose.Schema) {
//         this._model = mongoose.model<T>(dbName, schema);
//     }
// }
