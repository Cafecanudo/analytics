import { Application, Request, Response } from 'express';

class Routes {

    constructor(app: Application) {
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.route('/').get((res: Response) => {
            res.send('Hello word');
        });
        app.route('/ola/:nome').get((req: Request, res: Response) => {
            res.send(`Hello, ${req.params.nome}`);
        });
    }
}

export default Routes;
