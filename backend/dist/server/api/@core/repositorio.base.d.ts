import { Model, Document } from 'mongoose';
export interface IRead<T> {
}
export interface IWrite<T> {
}
export declare class RepositoryBase<T extends Document> implements IRead<T>, IWrite<T> {
    private model;
    constructor(model: Model<Document>);
    novo(item: T, callback: (error: any, result: T) => void): void;
}
