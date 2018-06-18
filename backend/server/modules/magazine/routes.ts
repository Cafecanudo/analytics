import { Request, Response } from 'express';
import { RouterDefault, RouteTypeModel } from '../RouterDefault';
import { GET, Path, POST } from '../../api/@core/decorators/decorators';
import { magazineRepositorio } from './magazine.repositorio';

@Path('/magazine')
export default class UsuarioRoutes extends RouterDefault {

    @GET()
    notasNFSE(req: Request, res: Response) {
        magazineRepositorio.notasNFSE()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    notasNFSEPendentes(req: Request, res: Response) {
        magazineRepositorio.notasNFSEPendentes()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    listaNotasNFSE(req: Request, res: Response) {
        magazineRepositorio.listaNotasNFSE(req.params.tipo)
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    colunasListaNotasNFSE(req: Request, res: Response) {
        magazineRepositorio.colunasListaNotasNFSE(req.params.tipo)
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    notasNFE(req: Request, res: Response) {
        magazineRepositorio.notasNFE()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    notasNFEPendentes(req: Request, res: Response) {
        magazineRepositorio.notasNFEPendentes()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    colunasListaNotasNFE(req: Request, res: Response) {
        magazineRepositorio.colunasListaNotasNFE(req.params.tipo)
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    listaNotasNFE(req: Request, res: Response) {
        magazineRepositorio.listaNotasNFE(req.params.tipo)
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    notasCTE(req: Request, res: Response) {
        magazineRepositorio.notasCTE()
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    colunasListaNotasCTE(req: Request, res: Response) {
        magazineRepositorio.colunasListaNotasCTE(req.params.tipo)
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @GET()
    listaNotasCTE(req: Request, res: Response) {
        magazineRepositorio.listaNotasCTE(req.params.tipo)
            .then(value => res.json(value))
            .catch(err => {
                res.status(err.statusCode).json(err);
            });
    }

    @POST()
    appendNotaNFSE(req: Request, res: Response) {
        magazineRepositorio.listaNotasCTE(req.params.tipo)
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
                path: 'nfse', index: this.notasNFSE
            },
            {
                type: 'POST', path: 'nfse/append', index: this.appendNotaNFSE
            },
            {
                path: 'nfse/pendentes', index: this.notasNFSEPendentes
            },
            {
                path: 'nfse/pendentes/lista/collumns/:tipo', index: this.colunasListaNotasNFSE
            },
            {
                path: 'nfse/pendentes/lista/:tipo', index: this.listaNotasNFSE
            },
            {
                path: 'nfe', index: this.notasNFE
            },
            {
                path: 'nfe/pendentes', index: this.notasNFEPendentes
            },
            {
                path: 'nfe/pendentes/lista/collumns/:tipo', index: this.colunasListaNotasNFE
            },
            {
                path: 'nfe/pendentes/lista/:tipo', index: this.listaNotasNFE
            },
            {
                path: 'cte', index: this.notasCTE
            },
            {
                path: 'cte/cancelados/lista/collumns/:tipo', index: this.colunasListaNotasCTE
            },
            {
                path: 'cte/cancelados/lista/:tipo', index: this.listaNotasCTE
            }
        ];
    }

}
