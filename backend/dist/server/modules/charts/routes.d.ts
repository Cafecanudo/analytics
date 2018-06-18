import { Request, Response } from 'express';
import { RouterDefault, RouteTypeModel } from '../RouterDefault';
export default class ChartsRoutes extends RouterDefault {
    obterGraficoDashboardID(req: Request, res: Response): void;
    getRoutes(): RouteTypeModel[];
}
