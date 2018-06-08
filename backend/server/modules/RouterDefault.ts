import { Application, Request, Response, Router } from 'express';
import ConsoleUtil from '../utils/console.util';

export const pathApi = '/api/v1';

export abstract class RouterDefault {

    private name: string;
    private readonly router: Router;

    protected constructor(public app: Application) {
        this.router = Router();
    }

    /**
     * Executado apos classe se contruida
     */
    postConstructor(): void {
    }

    /**
     * Retorna dos as rotas implementadas de um modulo
     * @returns {IRouteTypeModel[]}
     */
    abstract getRoutes(): IRouteTypeModel[];

    /**
     * Substitui nome padrão do modulo
     * @returns {string}
     */
    getPath(): string {
        return this.name;
    }

    public registerRoutes(name: string): void {
        this.name = name;
        ConsoleUtil.ln();
        ConsoleUtil.white(`#### Criando rotas para [modulo="${name}"]`);
        this.getRoutes().forEach(_r => {
            this.createRoute(_r);
        });
        this.postConstructor();
    }

    private createRoute(_r: IRouteTypeModel): void {
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
        ConsoleUtil.data(`Rota [${_r.type || 'GET'} ${uri}${_p}] registrada.`);
    }
}

export interface IRouteTypeModel {
    type?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    handler: (res: Request, rep: Response) => void;
}
