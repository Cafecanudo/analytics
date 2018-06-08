import { RepositoryBase } from '../../../api/@core/repositorio.base';
export interface IConfiguracaoModel {
    version: string;
    lastUpdate: Date;
}
declare class ConfiguracaoRepo extends RepositoryBase<IConfiguracaoModel> {
    schema(): {};
}
export declare const configuracaoRepo: ConfiguracaoRepo;
export {};
