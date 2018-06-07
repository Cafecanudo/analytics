import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
export default class AplicacaoRoutes extends RouterDefault {
    getRoutes(): IRouteTypeModel[];
    index(req: Request, res: Response): void;
}
