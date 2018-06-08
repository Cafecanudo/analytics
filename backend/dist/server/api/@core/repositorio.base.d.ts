export declare abstract class RepositoryBase<T> {
    private _model;
    constructor();
    abstract schema(): {};
    save(document: T): Promise<any>;
}
