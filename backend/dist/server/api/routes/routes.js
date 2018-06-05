"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/user/routes");
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) {
            res.json({
                version: '0.0.1-SNAPSHOT', status: 'Running'
            });
        });
        //Registrando rotas de usuario
        new routes_1.default(app).registerRoutes();
    };
    return Routes;
}());
exports.default = Routes;
