import { Model, Document } from 'mongoose';

export interface IRead<T> {

}

export interface IWrite<T> {

}

export class RepositoryBase<T extends Document> implements IRead<T>, IWrite<T> {

    constructor(private model: Model<Document>) { }

    novo(item: T, callback: (error: any, result: T) => void) {
        console.log('Criando novo registro...');
    }

}
