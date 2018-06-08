/**
 * Interface do modelo
 */
import { Document, Model, model, Schema } from 'mongoose';
import { MongoDbSchema } from '../../../api/@core/decorators/decorators';

export abstract class BaseModel<T> {

    private _model: Model<Document>;

    constructor() {
        this._model = model('', new Schema(this.schema()));
        // this._model.create();
    }

    /**
     * Para obter o schema do banco de dados
     * @returns {{}}
     */
    abstract schema(): {};

    save(document: T): Promise<any> {
        console.log(document);
        return new this._model(document).save();


        // return new Promise((resolve, reject) => {
        //     const _n = new this._model().save(document)
        //         .then(_d => {
        //             resolve(_d);
        //         }).catch(err => {
        //             reject(reject);
        //         });
        // });
    }

}

export interface IConfiguracaoModel {
    _id?: Schema.Types.ObjectId;
    version: string;
    lastUpdate: Date;
}

class ConfiguracaoRepo extends BaseModel<IConfiguracaoModel> {

    @MongoDbSchema('configuracao')
    schema(): {} {
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

const configuracaoRepo = new ConfiguracaoRepo();
export {
    configuracaoRepo as ConfiguracaoRepo
};


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
