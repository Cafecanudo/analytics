import { Document, Model, model, Schema } from 'mongoose';

export interface IRead<T> {

}

export interface IWrite<T> {

}

export class RepositoryBase<T extends Document> /*implements IRead<T>, IWrite<T> */ {

    private model: Model<Document>;

    constructor(dbName: string, schema: Schema) {
        this.model = model<T>(dbName, schema);
    }

    // save(item: T): Promise<T> {
    //     return new Promise<T>((resolve, reject) => {
    //         console
    //     });
    // }
    //
    // createDocument1(item: T): Promise<T> {
    //     return new Promise((resolve, reject) => {
    //         const _n = new this.model(item).save(err => {
    //             if (!err) {
    //                 return resolve(_n);
    //             }
    //             return reject(err);
    //         });
    //     });
    // }

}
