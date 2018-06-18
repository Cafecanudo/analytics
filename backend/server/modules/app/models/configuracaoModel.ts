/**
 * Interface do modelo
 */
import { MongoCollection } from '../../../api/@core/decorators/decorators';
import { RepositoryBase } from '../../../api/@core/repositorio.base';

export interface IConfiguracaoModel {
    version: string;
    lastUpdate: Date;
}

class ConfiguracaoRepo extends RepositoryBase<IConfiguracaoModel> {

    @MongoCollection('configuracao')
    schema() {
        return {
            version: {
                type: String,
                required: true
            },
            lastUpdate: {
                type: Date,
                required: true
            }
        };
    }
}

export const configuracaoRepo = new ConfiguracaoRepo();
