import { Document, Schema } from 'mongoose';
export interface IRead<T> {
}
export interface IWrite<T> {
}
export declare class RepositoryBase<T extends Document> {
    private model;
    constructor(dbName: string, schema: Schema);
}
