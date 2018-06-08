"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Interface do modelo
 */
const mongoose_1 = require("mongoose");
const decorators_1 = require("../../../api/@core/decorators/decorators");
class BaseModel {
    constructor() {
        this._model = mongoose_1.model('', new mongoose_1.Schema(this.schema()));
        this._model.create();
    }
}
exports.BaseModel = BaseModel;
class ConfiguracaoRepo extends BaseModel {
    schema() {
        return {
            version: {
                type: String,
                required: true
            },
            lastUpdate: {
                type: Date,
                required: true
            }
        };
    }
}
__decorate([
    decorators_1.MongoDbSchema('configuracao'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ConfiguracaoRepo.prototype, "schema", null);
const configuracaoRepo = new ConfiguracaoRepo();
exports.ConfiguracaoRepo = configuracaoRepo;
//
//
// export interface IConfiguracaoModel extends mongoose.Document {
//     version: string;
//     lastUpdate: Date;
// }
//
// // export interface IModel {
// //     configuracao: mongoose.Model<IConfiguracaoModel>;
// // }
//
// /**
//  * Criando schema de dados
//  * @type {module:mongoose.Schema}
//  */
// // export var configuracaoSchema: mongoose.Schema = new mongoose.Schema({
// //     version: {
// //         type: String,
// //         required: true
// //     },
// //     lastUpdate: {
// //         type: Date,
// //         required: true
// //     }
// // });
//
// export const configuracaoSchema = new Schema({
//     version: {
//         type: String,
//         required: true
//     },
//     lastUpdate: {
//         type: Date,
//         required: true
//     }
// });
//
// export class ConfiguracaoRepo<T extends mongoose.Document> extends RepositoryBase<T>{
//
//     constructor() {
//         super('configuracao', configuracaoSchema);
//     }
// }
//
// // class ModeBase<T extends mongoose.Document> {
// //
// //     private _model: mongoose.Model<T extends mongoose.Document>;
// //
// //     constructor(dbName: string, schema: mongoose.Schema) {
// //         this._model = mongoose.model<T>(dbName, schema);
// //     }
// // }
