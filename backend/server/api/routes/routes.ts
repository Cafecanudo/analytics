import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/user/routes';

export default class Routes {

    constructor(app: Application) {
        this.getRoutes(app);
    }

    getRoutes(app: Application) {
        app.route('/').get((req: Request, res: Response) => {
            res.json({
                version: '0.0.1-SNAPSHOT', status: 'Running'
            });
        });
        //Registrando rotas de usuario
        new UserRoutes(app).registerRoutes();
    }
}
