/* by Wellton Barros */

import { Application, Request, Response, Router } from 'express';
import * as fs from 'fs';

const mergeConfig = require('../../config/env/config')();

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
     * Busca todos os arquivos routes.ts dentro da pasta
     * ./server/modules, adicionar e crias suas rotas
     */
    private extracted() {
        const pathModules = './server/modules/';
        fs.readdirSync(pathModules).forEach(f => {
            const _in = `${pathModules}${f}`;
            if (fs.statSync(_in).isDirectory()) {
                if (fs.statSync(`${_in}/routes.ts`).isFile()) {
                    this.getDataAsync(`../../modules/${f}/routes`)
                        .then(_r => _r.registerRoutes(f));
                }
            }
        });
        if (process.env.NODE_ENV === 'test') {
            process.nextTick(run);
        }
    }

    /**
     * Faz import dinamico das routes.js
     * @param routeModule
     * @returns {Promise<void>}
     */
    async getDataAsync(routeModule) {
        const apiClient = await import(routeModule).then(r => {
            return new r.default(this.app);
        });
        return await apiClient;
    }

}
