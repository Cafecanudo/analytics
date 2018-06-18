import { Request, Response } from 'express';
import { RouterDefault, RouteTypeModel } from '../RouterDefault';
export default class DashboadsRoutes extends RouterDefault {
    obterDashboardPerfilUsuario(req: Request, res: Response): void;
    obterDashboardName(req: Request, res: Response): void;
    getRoutes(): RouteTypeModel[];
}
