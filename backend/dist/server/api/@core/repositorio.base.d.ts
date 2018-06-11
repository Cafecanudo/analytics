export declare abstract class RepositoryBase<T> {
    private _model;
    constructor();
    abstract schema(): any;
    save(document: T): Promise<any>;
}
