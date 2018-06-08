export declare abstract class BaseModel<T> {
    private _model;
    constructor();
    /**
     * Para obter o schema do banco de dados
     * @returns {{}}
     */
    abstract schema(): {};
}
export interface IConfiguracaoModel {
    version: string;
    lastUpdate: Date;
}
declare class ConfiguracaoRepo extends BaseModel<IConfiguracaoModel> {
    schema(): {};
}
declare const configuracaoRepo: ConfiguracaoRepo;
export { configuracaoRepo as ConfiguracaoRepo };
