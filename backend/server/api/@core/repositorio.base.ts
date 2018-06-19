import * as mongoose from 'mongoose';
import { Document, Model, model, Schema } from 'mongoose';
import ConsoleUtil from '../../utils/console.util';

const uniqueValidator = require('mongoose-unique-validator');

/**
 * Implementar aqui todos os metodos do mongoose
 */
export abstract class RepositoryBase<T extends mongoose.Document> {

    private _model: Model<Document>;
    private _schema: any;

    constructor() {
        this._schema = new Schema(this.schema.caller(), { collection: this.schema['collectionName'] });
        this._model = model<T>(this.schema['collectionName'], this._schema);
        this._schema.plugin(uniqueValidator);
        ConsoleUtil.data(`Collection "${this.schema['collectionName']}" criado no banco de dados.`);
    }

    /**
     * Para obter o schema do banco de dados
     * @returns {{}}
     */
    abstract schema();

    save(document: T): Promise<any> {
        return new this._model(document).save();
    }

    /*saveOrUpdate(document: T): Promise<any> {
        return new this._model(document).findOneAndUpdate({}, document, { upsert: true,  });
    }*/

}
