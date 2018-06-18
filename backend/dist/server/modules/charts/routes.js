"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterDefault_1 = require("../RouterDefault");
const decorators_1 = require("../../api/@core/decorators/decorators");
const charts_repositorio_1 = require("./charts.repositorio");
let ChartsRoutes = class ChartsRoutes extends RouterDefault_1.RouterDefault {
    obterGraficoDashboardID(req, res) {
        charts_repositorio_1.chartsRepositorio.obterGraficoDashboardID(req.params.idDashboard).then(value => {
            res.json(value);
        }).catch(reason => {
            res.status(500).json(reason);
        });
    }
    getRoutes() {
        return [
            {
                path: 'dashboard/:id', index: this.obterGraficoDashboardID
            }
        ];
    }
};
__decorate([
    decorators_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ChartsRoutes.prototype, "obterGraficoDashboardID", null);
ChartsRoutes = __decorate([
    decorators_1.Path('/charts')
], ChartsRoutes);
exports.default = ChartsRoutes;
//# sourceMappingURL=routes.js.map