import { Document, Model, model, Schema } from 'mongoose';

export abstract class RepositoryBase<T> {

    private _model: Model<Document>;

    constructor() {
        this._model = model('configuracao', new Schema(this.schema.caller()));
    }

    getCollection(): any {
        console.log('NNNNAAAAO');
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
