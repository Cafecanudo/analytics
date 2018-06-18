import { Request, Response } from 'express';
import { RouteTypeModel, RouterDefault } from '../RouterDefault';
export default class AplicacaoRoutes extends RouterDefault {
    getRoutes(): RouteTypeModel[];
    index(req: Request, res: Response): void;
}
