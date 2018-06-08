import { RepositoryBase } from '../../../api/@core/repositorio.base';
export interface IConfiguracaoModel {
    version: string;
    lastUpdate: Date;
}
declare class ConfiguracaoRepo extends RepositoryBase<IConfiguracaoModel> {
    schema(): {
        version: {
            type: StringConstructor;
            required: boolean;
        };
        lastUpdate: {
            type: DateConstructor;
            required: boolean;
        };
    };
}
export declare const configuracaoRepo: ConfiguracaoRepo;
export {};
