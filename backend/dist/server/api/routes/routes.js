"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = require("fs");
const console_util_1 = require("../../utils/console.util");
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
    getDataAsync(name, routeModule) {
        const apiClient = Promise.resolve().then(() => require(routeModule)).then(r => {
            console_util_1.default.info(`Importando rotas [modules/${name}/routes.js]...`);
            return new r.default(this.app);
        });
        return apiClient;
    }
    extracted() {
        const pathModules = './server/modules/';
        fs.readdirSync(pathModules).forEach(f => {
            const _in = `${pathModules}${f}`;
            if (fs.statSync(_in).isDirectory()) {
                if (fs.statSync(`${_in}/routes.ts`).isFile()) {
                    this.getDataAsync(f, `../../modules/${f}/routes`)
                        .then(_r => _r.registerRoutes(f));
                }
            }
        });
        if (process.env.NODE_ENV === 'test') {
            process.nextTick(run);
        }
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map