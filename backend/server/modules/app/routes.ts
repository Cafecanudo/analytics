import { Request, Response } from 'express';
import RouterDefault, { IRouteTypeModel } from '../RouterDefault';

export default class Routes extends RouterDefault {

    getPath(): string {
        return '/configuracao';
    }

    /**
     * Retorna dados do profile do usuario
     * @param {e.Request} req
     * @param {e.Response} res
     */
    index(req: Request, res: Response) {
        res.json({});
    }

    /**
     * Retorna todas as rotas para path de Usuario
     * @returns {IRouteTypeModel[]}
     */
    getRoutes(): IRouteTypeModel[] {
        return [
            {
                path: '/',
                handler: this.index
            }
        ];
    }

}
