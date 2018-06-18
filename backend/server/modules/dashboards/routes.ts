import { Request, Response } from 'express';

import { RouterDefault, RouteTypeModel } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';
import { dashboardRepositorio } from './dashboard.repositorio';

@Path('/dashboards')
export default class DashboadsRoutes extends RouterDefault {

    @GET()
    obterDashboardPerfilUsuario(req: Request, res: Response) {
        dashboardRepositorio.obterDashboardPerfilUsuario().then(value => {
            res.json(value);
        }).catch(err => {
            res.status(500).json(err);
        });
    }

    @GET()
    obterDashboardName(req: Request, res: Response) {
        dashboardRepositorio.obterDashboardName(req.params.name).then(value => {
            res.json(value);
        }).catch(err => {
            res.status(500).json(err);
        });
    }

    /**
     * Retorna as rodas de usuario
     * @returns {RouteTypeModel[]}
     */
    getRoutes(): RouteTypeModel[] {
        return [
            {
                index: this.obterDashboardPerfilUsuario
            },
            {
                path: 'name/:name', index: this.obterDashboardName
            }
        ];
    }

}
