import { Document } from 'mongoose';
export declare abstract class RepositoryBase<T extends Document> {
    private _model;
    private _schema;
    constructor();
    abstract schema(): any;
    save(document: T): Promise<T>;
    saveOrUpdate(params: {}, document: T): Promise<T>;
}
