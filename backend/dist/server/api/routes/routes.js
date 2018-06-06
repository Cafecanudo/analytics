"use strict";
/* by Wellton Barros */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    getDataAsync(routeModule) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiClient = yield Promise.resolve().then(() => require(routeModule)).then(r => {
                return new r.default(this.app);
            });
            return yield apiClient;
        });
    }
}
exports.default = Routes;
