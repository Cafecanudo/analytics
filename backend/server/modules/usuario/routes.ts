import { Request, Response } from 'express';
import { RouteTypeModel, RouterDefault } from '../RouterDefault';
import { GET, Path } from '../../api/@core/decorators/decorators';
import { usuarioRepositorio } from './usuario.repositorio';

@Path('/usuario')
export default class UsuarioRoutes extends RouterDefault {

    @GET()
    perfil(req: Request, res: Response) {
        usuarioRepositorio.obterPerfilUsuario()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    nome(req: Request, res: Response) {
        usuarioRepositorio.obterPerfilUsuario()
            .then(value => res.json(value.dadosUsuario))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    menu(req: Request, res: Response) {
        usuarioRepositorio.obterMenusUsuario()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    notificacao(req: Request, res: Response) {
        usuarioRepositorio.obterPerfilNotificacaoResumo()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    /**
     * Retorna as rodas de usuario
     * @returns {RouteTypeModel[]}
     */
    getRoutes(): RouteTypeModel[] {
        return [
            {
                path: 'perfil', index: this.perfil
            },
            {
                path: 'perfil/nome', index: this.nome
            },
            {
                path: 'perfil/menu', index: this.menu
            },
            {
                path: 'perfil/notificacao-resumo', index: this.notificacao
            }
        ];
    }

}
