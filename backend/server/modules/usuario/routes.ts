import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';

@Path('/usuario')
export default class UsuarioRoutes extends RouterDefault {

    getRoutes(): IRouteTypeModel[] {
        return [
            {
                path: 'perfil',
                handler: this.perfil
            }
        ];
    }

    @GET()
    perfil(req: Request, res: Response) {
        res.send('hahah');
    }

}
