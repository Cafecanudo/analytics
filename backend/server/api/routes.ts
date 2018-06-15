/* by Wellton Barros */

import { Application, Request, Response, Router } from 'express';
import * as fs from 'fs';
import ConsoleUtil from '../utils/console.util';

const mergeConfig = require('../config/config')();

export default class Routes {

    constructor(public app: Application) {
        this.getRoutes();
    }

    getRoutes() {
        this.app.use('/', Router().get('/', (req: Request, res: Response) => {
            res.json({
                version: mergeConfig.version
            });
        }));
        this.extracted();
    }

    /**
     * Faz import dinamico das routes.js
     * @param routeModule
     * @returns {Promise<void>}
     */
    getDataAsync(name, routeModule) {
        const apiClient = import(routeModule).then(r => {
            ConsoleUtil.info(`Importando rotas [modules/${name}/routes.js]...`);
            return new r.default(this.app);
        });
        return apiClient;
    }

    /**
     * Busca todos os arquivos routes.ts dentro da pasta
     * ./server/modules, adicionar e crias suas rotas
     */
    private extracted() {
        const pathModules = './server/modules/';
        fs.readdirSync(pathModules).forEach(f => {
            const _in = `${pathModules}${f}`;
            if (fs.statSync(_in).isDirectory()) {
                if (fs.statSync(`${_in}/routes.ts`).isFile()) {
                    this.getDataAsync(f, `../modules/${f}/routes`)
                        .then(_r => _r.registerRoutes(f));
                }
            }
        });
        if (process.env.NODE_ENV === 'test') {
            process.nextTick(run);
        }
    }

}
