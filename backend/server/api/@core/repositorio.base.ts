import { Document, model, Model, Schema } from 'mongoose';
import ConsoleUtil from '../../utils/console.util';

const uniqueValidator = require('mongoose-unique-validator');

/**
 * Implementar aqui todos os metodos do mongoose
 */
export abstract class RepositoryBase<T extends Document> {

    private _model: Model<T>;
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

    save(document: T): Promise<T> {
        return new this._model(document).save();
    }

    saveOrUpdate(params: {}, document: T): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const daw = this._model.findOneAndUpdate(params, document, {
                new: true, upsert: true,
                runValidators: true
            }).then(res => {
                console.log(res);
                resolve(res);
            }).catch(reason => {
                console.log(reason);
                reject(reason);
            });

            console.log(daw);
        });


        // return _d.findOneAndUpdate(
        //     {tipo: document.tipo}
        // ) //(document).findOneAndUpdate({}, document, { upsert: true,  });
    }

}
