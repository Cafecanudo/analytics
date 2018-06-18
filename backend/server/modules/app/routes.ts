import { Request, Response } from 'express';
import { RouteTypeModel, RouterDefault } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';
import { configuracaoRepo } from './models/configuracaoModel';

@Path('/app')
export default class AplicacaoRoutes extends RouterDefault {

    getRoutes(): RouteTypeModel[] {
        return [
            { path: '/', index: this.index }
        ];
    }

    @GET('/')
    index(req: Request, res: Response) {
        res.json({
            version: '1', lastUpdate: new Date()
        });
    }
}
