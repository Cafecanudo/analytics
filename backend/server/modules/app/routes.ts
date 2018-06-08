import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';
import { ConfiguracaoRepo } from './models/configuracaoModel';

@Path('/app')
export default class AplicacaoRoutes extends RouterDefault {

    private configRepo: any;

    getRoutes(): IRouteTypeModel[] {
        return [
            {path: '/', handler: this.index}
        ];
    }

    @GET('/')
    index(req: Request, res: Response) {
        ConfiguracaoRepo.schema();
        res.json({});
    }
}
