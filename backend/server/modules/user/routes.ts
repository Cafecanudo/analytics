import { Application, Request, Response } from 'express';
import RouterDefault from '../RouterDefault';
import { IRouteType } from '../../../dist/server/modules/IRouteType';

export default class Routes extends RouterDefault {
    public static ROUTE = {
        PROFILE: '/api/profile'
    };

    constructor(app: Application) {
        super(app);
    }

    registerRoutes(): void {
        super.registerRoutes();
    }

    profile(req: Request, res: Response) {
        res.send('hahah');
    }

    getRoutes(): IRouteType[] {
        return [
            {
                path: '/api/profile',
                handler: this.profile
            }
        ];
    }
}
