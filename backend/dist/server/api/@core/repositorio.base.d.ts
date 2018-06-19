import * as mongoose from 'mongoose';
export declare abstract class RepositoryBase<T extends mongoose.Document> {
    private _model;
    private _schema;
    constructor();
    abstract schema(): any;
    save(document: T): Promise<any>;
}
