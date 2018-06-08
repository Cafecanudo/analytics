import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';
import { ConfiguracaoRepo } from './models/configuracaoModel';

@Path('/app')
export default class AplicacaoRoutes extends RouterDefault {

    getRoutes(): IRouteTypeModel[] {
        return [
            {path: '/', handler: this.index}
        ];
    }

    @GET('/')
    index(req: Request, res: Response) {
        ConfiguracaoRepo.save({
            version: '1', lastUpdate: new Date()
        }).then(value => {
            res.json(value);
        }).catch(err => {
            res.status(500).send(err);
        });
    }
}
