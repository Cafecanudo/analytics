import { Request, Response } from 'express';
import RouterDefault, { IRouteTypeModel } from '../RouterDefault';

export default class Routes extends RouterDefault {

    getPath(): string {
        return 'usuario';
    }

    /**
     * Retorna dados do profile do usuario
     * @param {e.Request} req
     * @param {e.Response} res
     */
    perfil(req: Request, res: Response) {
        res.send('hahah');
    }

    /**
     * Retorna todas as rotas para path de Usuario
     * @returns {IRouteTypeModel[]}
     */
    getRoutes(): IRouteTypeModel[] {
        return [
            {
                path: 'perfil',
                handler: this.perfil
            }
        ];
    }

}
