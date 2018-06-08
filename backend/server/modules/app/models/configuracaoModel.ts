/**
 * Interface do modelo
 */
import { MongoDbSchema } from '../../../api/@core/decorators/decorators';
import { RepositoryBase } from '../../../api/@core/repositorio.base';

export interface IConfiguracaoModel {
    version: string;
    lastUpdate: Date;
}

class ConfiguracaoRepo extends RepositoryBase<IConfiguracaoModel> {

    @MongoDbSchema('configuracao')
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
