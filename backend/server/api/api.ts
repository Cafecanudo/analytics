import * as Express from 'express';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
import { errorHandlerApi } from './errorHandlerApi';
import morgan = require('morgan');

class Api {

    public express: Express.Application;

    constructor() {
        this.express = Express();
        this.middleware();
    }

    middleware(): void {
        this.express.use(morgan(process.env.ENV || 'dev'));
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi);
        this.router(this.express);
    }

    private router(app: Express.Application): void {
        new Routes(app);
    }
}

export default new Api().express;
