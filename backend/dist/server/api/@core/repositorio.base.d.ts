export declare abstract class RepositoryBase<T> {
    private _model;
    private _schema;
    constructor();
    abstract schema(): any;
    save(document: T): Promise<any>;
}
