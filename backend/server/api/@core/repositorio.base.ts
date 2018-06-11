import { Document, Model, model, Schema } from 'mongoose';
import ConsoleUtil from '../../utils/console.util';

/**
 * Implementar aqui todos os metodos do mongoose
 */
export abstract class RepositoryBase<T> {

    private _model: Model<Document>;

    constructor() {
        this._model = model(this.schema['collectionName'], new Schema(this.schema.caller(), { collection: this.schema['collectionName'] }));
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

}
