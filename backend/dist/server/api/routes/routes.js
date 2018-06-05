"use strict";
/* by Wellton Barros */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = require("fs");
const mergeConfig = require('../../config/env/config')();
class Routes {
    constructor(app) {
        this.app = app;
        this.getRoutes();
    }
    getRoutes() {
        this.app.use('/', express_1.Router().get('/', (req, res) => {
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
    extracted() {
        const pathModules = './server/modules/';
        fs.readdirSync(pathModules).forEach(f => {
            const _in = `${pathModules}${f}`;
            if (fs.statSync(_in).isDirectory()) {
                if (fs.statSync(`${_in}/routes.ts`).isFile()) {
                    this.getDataAsync(`../../modules/${f}/routes`)
                        .then(_r => _r.registerRoutes(`modules/${f}/routes.ts`));
                }
            }
        });
    }
    /**
     * Faz import dinamico das routes.js
     * @param routeModule
     * @returns {Promise<void>}
     */
    getDataAsync(routeModule) {
        const apiClient = Promise.resolve().then(() => require(routeModule)).then(r => {
            return new r.default(this.app);
        });
        return apiClient;
    }
}
exports.default = Routes;
