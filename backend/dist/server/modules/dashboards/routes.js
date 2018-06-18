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
const dashboard_repositorio_1 = require("./dashboard.repositorio");
let DashboadsRoutes = class DashboadsRoutes extends RouterDefault_1.RouterDefault {
    obterDashboardPerfilUsuario(req, res) {
        dashboard_repositorio_1.dashboardRepositorio.obterDashboardPerfilUsuario().then(value => {
            res.json(value);
        }).catch(err => {
            res.status(500).json(err);
        });
    }
    obterDashboardName(req, res) {
        dashboard_repositorio_1.dashboardRepositorio.obterDashboardName(req.params.name).then(value => {
            res.json(value);
        }).catch(err => {
            res.status(500).json(err);
        });
    }
    getRoutes() {
        return [
            {
                index: this.obterDashboardPerfilUsuario
            },
            {
                path: 'name/:name', index: this.obterDashboardName
            }
        ];
    }
};
__decorate([
    decorators_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DashboadsRoutes.prototype, "obterDashboardPerfilUsuario", null);
__decorate([
    decorators_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DashboadsRoutes.prototype, "obterDashboardName", null);
DashboadsRoutes = __decorate([
    decorators_1.Path('/dashboards')
], DashboadsRoutes);
exports.default = DashboadsRoutes;
//# sourceMappingURL=routes.js.map