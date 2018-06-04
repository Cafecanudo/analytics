"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    constructor(app) {
        this.getRoutes(app);
    }
    getRoutes(app) {
        app.route('/').get((res) => {
            res.send('Hello word');
        });
        app.route('/ola/:nome').get((req, res) => {
            res.send(`Hello, ${req.params.nome}`);
        });
    }
}
exports.default = Routes;
