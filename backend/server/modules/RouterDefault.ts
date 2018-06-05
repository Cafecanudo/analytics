import { Application, Request, Response, Router } from 'express';
import ConsoleUtil from '../utils/console.util';

export const pathApi = '/api/v1';

export default abstract class RouterDefault {

    private readonly router: Router;

    /**
     * Retorna o URI do Path do servico
     * @returns {string}
     */
    abstract getPath(): string;

    /**
     * Retorna dos as rotas implementadas de um modulo
     * @returns {IRouteTypeModel[]}
     */
    abstract getRoutes(): IRouteTypeModel[];

    protected constructor(public app: Application) {
        this.router = Router();
    }

    registerRoutes(name: string): void {
        this.getRoutes().forEach(_r => {
            this.createRoute(_r);
        });
    }

    createRoute(_r: IRouteTypeModel): void {
        const _p = '/' + _r.path.replace(/^[\/]+/, '');
        switch (_r.type || 'GET') {
            case 'POST': {
                this.router.post(_p, _r.handler);
                break;
            }
            case 'PUT': {
                this.router.put(_p, _r.handler);
                break;
            }
            case 'DELETE': {
                this.router.delete(_p, _r.handler);
                break;
            }
            case 'PATCH': {
                this.router.patch(_p, _r.handler);
                break;
            }
            default: {
                this.router.get(_p, _r.handler);
            }
        }
        const uri = `${pathApi}/${this.getPath().replace(/^[\/]+/, '')}`;
        this.app.use(uri, this.router);
        ConsoleUtil.help(`# =====> Rota [${_r.type || 'GET'} ${uri}${_p}] registrada.`);
    }
}

export interface IRouteTypeModel {
    type?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    handler: (res: Request, rep: Response) => void;
}
