"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouterDefault_1 = require("../RouterDefault");
class Routes extends RouterDefault_1.default {
    getPath() {
        return 'usuario';
    }
    /**
     * Retorna dados do profile do usuario
     * @param {e.Request} req
     * @param {e.Response} res
     */
    perfil(req, res) {
        res.send('hahah');
    }
    /**
     * Retorna todas as rotas para path de Usuario
     * @returns {IRouteTypeModel[]}
     */
    getRoutes() {
        return [
            {
                path: 'perfil',
                handler: this.perfil
            }
        ];
    }
}
exports.default = Routes;
