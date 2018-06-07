import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';

@Path('/app')
export default class AplicacaoRoutes extends RouterDefault {

    getRoutes(): IRouteTypeModel[] {
        return [
            {path: '/', handler: this.index}
        ];
    }

    @GET('/')
    index(req: Request, res: Response) {
        res.json({});
    }
}
