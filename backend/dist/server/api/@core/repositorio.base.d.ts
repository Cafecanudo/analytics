export declare abstract class RepositoryBase<T> {
    private _model;
    constructor();
    getCollection(): any;
    abstract schema(): any;
    save(document: T): Promise<any>;
}
