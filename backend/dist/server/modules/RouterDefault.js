"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const console_util_1 = require("../utils/console.util");
exports.pathApi = '/api/v1';
class RouterDefault {
    constructor(app) {
        this.app = app;
        this.router = express_1.Router();
    }
    postConstructor() {
    }
    getPath() {
        return this.name;
    }
    registerRoutes(name) {
        this.name = name;
        console_util_1.default.ln();
        console_util_1.default.white(`#### Criando rotas para [modulo="${name}"]`);
        this.getRoutes().forEach(_r => {
            this.createRoute(_r);
        });
        this.postConstructor();
    }
    createRoute(_r) {
        const _p = '/' + _r.path.replace(/^[\/]+/, '');
        switch (_r.type || 'GET') {
            case 'POST': {
                this.router.post(_p, _r.index);
                break;
            }
            case 'PUT': {
                this.router.put(_p, _r.index);
                break;
            }
            case 'DELETE': {
                this.router.delete(_p, _r.index);
                break;
            }
            case 'PATCH': {
                this.router.patch(_p, _r.index);
                break;
            }
            default: {
                this.router.get(_p, _r.index);
            }
        }
        const uri = `${exports.pathApi}/${this.getPath().replace(/^[\/]+/, '')}`;
        this.app.use(uri, this.router);
        console_util_1.default.data(`Rota [${_r.type || 'GET'} ${uri}${_p}] registrada.`);
    }
}
exports.RouterDefault = RouterDefault;
//# sourceMappingURL=RouterDefault.js.map