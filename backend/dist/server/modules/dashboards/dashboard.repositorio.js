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
const repositorio_base_1 = require("../../api/@core/repositorio.base");
const decorators_1 = require("../../api/@core/decorators/decorators");
const IDashboardModel_1 = require("./models/IDashboardModel");
class DashboardRepositorio extends repositorio_base_1.RepositoryBase {
    schema() {
        return IDashboardModel_1.dashboardSchema;
    }
    obterDashboardName(idDashboard) {
        return new Promise((resolve, reject) => {
            const dashboard = {
                principal: true,
                _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                name: 'notas-internalizadas',
                descricao: 'Status de Notas',
                hint: 'IDashboardModel mostra uma visao de todas as notas internalizadas/pendente/cancelado',
                icone: 'fa fa-line-chart'
            };
            resolve(dashboard);
        });
    }
    obterDashboardPerfilUsuario() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    principal: true,
                    _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                    name: 'notas-internalizadas',
                    descricao: 'Status de Notas',
                    hint: 'IDashboardModel mostra uma visao de todas as notas internalizadas/pendente/cancelado',
                    icone: 'fa fa-line-chart'
                }
            ]);
        });
    }
}
__decorate([
    decorators_1.MongoCollection('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardRepositorio.prototype, "schema", null);
exports.dashboardRepositorio = new DashboardRepositorio();
//# sourceMappingURL=dashboard.repositorio.js.map