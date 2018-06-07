import { Document, Model, model, Schema } from 'mongoose';

export interface IRead<T> {

}

export interface IWrite<T> {

}

export class RepositoryBase<T extends Document> /*implements IRead<T>, IWrite<T> */ {

    private model: Model<Document>;

    constructor(dbName: string, schema: Schema) {
        this.model = model<T>(dbName, );
    }

    createDocument(item: T, callback: (error: any, result: T) => void) {
        console.log('Criando novo registro...');
    }

}
