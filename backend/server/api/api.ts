/* by Wellton Barros */
import bodyParser = require('body-parser');
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as cors from 'cors';
//Adicionando rotas
import { errorHandlerApi } from './errorHandlerApi';
import Routes from './routes/routes';
import ConsoleUtil from '../utils/console.util';
import { configuracaoSchema, IConfiguracaoModel, IModel } from '../modules/app/models/configuracaoModel';

//somente require
require('../config/env/str');

//import locais
const env = require('../config/env/config')();

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
        mongoose.connect(this.mongoDb, {user: env.database.username, pass: env.database.password}, (err => {
            if (!err) {
                ConsoleUtil.info('Conectado MongoDB=OK.');
                ConsoleUtil.info('Criando modelo de dados no banco...');
                new Promise(this.createModels).then(res => {
                    console.log(res);
                    ConsoleUtil.info('Criando modelos=OK');
                    this.configure();
                    this.routes();
                }).catch(err => {
                    ConsoleUtil.error('Criando modelos=FAIL');
                });
            } else {
                ConsoleUtil.error('Conectado MongoDB=FAIL');
                ConsoleUtil.error(err);
            }
        }));
    }

    private configure(): void {
        ConsoleUtil.info('Configurando aplicação[Middlewares]...');
        if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
            this.app.use(logger('dev'));
        }
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(errorHandlerApi);
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());

        // cors
        this.app.use((req, res, next) => {
            res.header(
                'Access-Control-Allow-Origin',
                `${env.frontend.protocolo || 'http'}://${env.frontend.host}${env.frontend.port ? `:${env.frontend.port}` : ''}`
            );
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });

    }

    private createModels(resolve, reject): void {
        const _model = mongoose.model<IConfiguracaoModel>('configuracao', configuracaoSchema);

        // const __m = <IConfiguracaoModel>{
        //     version: '0.0.1', lastUpdate: new Date()
        // };
        // _model.create(__m);

        const __m = new _model({
            version: '0.0.1', lastUpdate: new Date()
        });

        resolve(__m);
    }

    private showHost(): void {
        ConsoleUtil.info(`ELDOC-Analytics is UP on http://${env.server.hostname}:${env.server.port} ###`);
    }

    private routes(): void {
        ConsoleUtil.info('Registrando rotas...');
        new Routes(this.app);
    }
}

export default new Api().app;
