import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
export default class UsuarioRoutes extends RouterDefault {
    perfil(req: Request, res: Response): void;
    nome(req: Request, res: Response): void;
    menu(req: Request, res: Response): void;
    notificacao(req: Request, res: Response): void;
    getRoutes(): IRouteTypeModel[];
}
