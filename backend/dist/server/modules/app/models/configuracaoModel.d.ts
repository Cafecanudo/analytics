import * as mongoose from 'mongoose';
import { RepositoryBase } from '../../../api/@core/repositorio.base';
export interface IConfiguracaoModel extends mongoose.Document {
    version: string;
    lastUpdate: Date;
}
export declare class ConfiguracaoRepo extends RepositoryBase<IConfiguracaoModel> {
    constructor();
}
