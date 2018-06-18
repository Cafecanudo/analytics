import { Request, Response } from 'express';

import { RouterDefault, RouteTypeModel } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';
import { chartsRepositorio } from './charts.repositorio';

@Path('/charts')
export default class ChartsRoutes extends RouterDefault {

    @GET()
    obterGraficoDashboardID(req: Request, res: Response) {
        chartsRepositorio.obterGraficoDashboardID(req.params.idDashboard).then(value => {
            res.json(value);
        }).catch(reason => {
            res.status(500).json(reason);
        });
    }

    /**
     * Retorna as rodas de usuario
     * @returns {RouteTypeModel[]}
     */
    getRoutes(): RouteTypeModel[] {
        return [
            {
                path: 'dashboard/:id', index: this.obterGraficoDashboardID
            }
        ];
    }

}
