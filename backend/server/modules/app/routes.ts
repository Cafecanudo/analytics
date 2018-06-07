import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';
import { ConfiguracaoRepo } from './models/configuracaoModel';

@Path('/app')
export default class AplicacaoRoutes extends RouterDefault {

    private configRepo: ConfiguracaoRepo;

    getRoutes(): IRouteTypeModel[] {
        return [
            {path: '/', handler: this.index}
        ];
    }

    @GET('/')
    index(req: Request, res: Response) {
        this.configRepo = new ConfiguracaoRepo();
        this.configRepo.createDocument({
            version: '22', lastUpdate: 'e2'
        });
        res.json({});
    }
}
