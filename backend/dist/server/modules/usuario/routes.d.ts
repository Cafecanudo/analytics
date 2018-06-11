import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
export default class UsuarioRoutes extends RouterDefault {
    getRoutes(): IRouteTypeModel[];
    perfil(req: Request, res: Response): void;
    nome(req: Request, res: Response): void;
    menu(req: Request, res: Response): void;
}
