"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouterDefault_1 = require("../RouterDefault");
class Routes extends RouterDefault_1.default {
    getPath() {
        return '/configuracao';
    }
    /**
     * Retorna dados do profile do usuario
     * @param {e.Request} req
     * @param {e.Response} res
     */
    index(req, res) {
        res.json({});
    }
    /**
     * Retorna todas as rotas para path de Usuario
     * @returns {IRouteTypeModel[]}
     */
    getRoutes() {
        return [
            {
                path: '/',
                handler: this.index
            }
        ];
    }
}
exports.default = Routes;
