import { Application } from 'express';
import { IRouteType } from '../../dist/server/modules/IRouteType';

export default abstract class RouterDefault {

    abstract getRoutes(): IRouteType[];

    constructor(public app: Application) {
    }

    registerRoutes(): void {
        this.getRoutes().forEach(_r => {
            this.createRoute(_r);
        });
    }

    createRoute(_r: IRouteType): void {
        const r = this.app.route(_r.path);
        switch (_r.type || 'GET') {
            case 'POST': {
                r.post(_r.handler);
                break;
            }
            case 'PUT': {
                r.post(_r.handler);
                break;
            }
            case 'DELETE': {
                r.delete(_r.handler);
                break;
            }
            case 'PATCH': {
                r.patch(_r.handler);
                break;
            }
            default: {
                r.get(_r.handler);
            }
        }
    }
}
