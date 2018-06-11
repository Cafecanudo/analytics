import { Request, Response } from 'express';
import { IRouteTypeModel, RouterDefault } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';
import { usuarioRepositorio } from './usuario.repositorio';

@Path('/usuario')
export default class UsuarioRoutes extends RouterDefault {

    getRoutes(): IRouteTypeModel[] {
        return [
            {
                path: 'perfil',
                index: this.perfil
            },
            {
                path: 'perfil/nome',
                index: this.nome
            },
            {
                path: 'perfil/menu',
                index: this.menu
            }
        ];
    }

    @GET()
    perfil(req: Request, res: Response) {
        usuarioRepositorio.getPerfilUsuario()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    nome(req: Request, res: Response) {
        usuarioRepositorio.getPerfilUsuario()
            .then(value => res.json(value.dadosUsuario))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    menu(req: Request, res: Response) {
        usuarioRepositorio.getMenusUsuario()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

}
