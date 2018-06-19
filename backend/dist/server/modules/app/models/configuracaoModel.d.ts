import { Document } from 'mongoose';
import { RepositoryBase } from '../../../api/@core/repositorio.base';
export interface IConfiguracaoModel extends Document {
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
