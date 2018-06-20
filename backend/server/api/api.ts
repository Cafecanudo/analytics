/* by Wellton Barros */
import bodyParser = require('body-parser');
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as forcessl from 'express-force-ssl';
//Adicionando rotas
import { errorHandlerApi } from './errorHandlerApi';
import Routes from './routes';
import ConsoleUtil from '../utils/console.util';

//somente require
require('../config/str');

//import locais
const env = require('../config/config')();

class Api {
    public app: express.Application;
    private readonly mongoDb: string;

    constructor() {
        this.app = express();
        this.mongoDb = `mongodb://${env.database.host}${env.database.port ? `:${env.database.port || 27017}` : ''}/${env.database.databasename}`;
        this.connectMongoDb();
    }

    private connectMongoDb(): void {
        ConsoleUtil.info('Conectando banco de dados[MongoDB]...');
        mongoose.connect(this.mongoDb, { user: env.database.username, pass: env.database.password }, (err => {
            if (!err) {
                ConsoleUtil.info('Conectado MongoDB=OK.');
                ConsoleUtil.info('Criando modelo de dados no banco...');
                this.configure();
                this.routes();
            } else {
                ConsoleUtil.error('Conectado MongoDB=FAIL');
                ConsoleUtil.error(err);
            }
        }));
    }

    private configure(): void {
        ConsoleUtil.info('Configurando aplicação[Middlewares]...');
        if ((process.env.NODE_ENV || 'development') === 'development') {
            this.app.use(logger('dev'));
        }
        const portCors = (env.frontend.port && env.frontend.port !== 80) ? `:${env.frontend.port}` : '';
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(errorHandlerApi);
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors({
            origin: `${env.frontend.protocolo || 'http'}://${env.frontend.host}${portCors}`,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            optionsSuccessStatus: 204
        }));
        if (env.server.protocolo === 'https') {
            this.app.use(forcessl);
        }

    }

    private routes(): void {
        ConsoleUtil.info('Registrando rotas...');
        new Routes(this.app);
    }
}

export default new Api().app;
