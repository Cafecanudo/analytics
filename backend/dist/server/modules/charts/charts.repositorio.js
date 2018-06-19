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
const IChartModel_1 = require("./models/IChartModel");
class ChartsRepositorio extends repositorio_base_1.RepositoryBase {
    schema() {
        return IChartModel_1.chartSchame;
    }
    obterGraficoID(idGrafico) {
        return new Promise((resolve, reject) => {
            resolve({
                _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                tipo: 'BAR-COLOR-3D',
                name: 'notas-internalizadas',
                descricao: 'Status de Notas',
                order: 0,
                maxcol: 1
            });
        });
    }
    obterGraficoDashboardID(idDashboard) {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                    tipo: 'BAR-COLOR-3D',
                    name: 'notas-internalizadas',
                    descricao: 'Status de Notas',
                    order: 0,
                    maxcol: 1
                }
            ]);
        });
    }
}
__decorate([
    decorators_1.MongoCollection('chart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChartsRepositorio.prototype, "schema", null);
exports.chartsRepositorio = new ChartsRepositorio();
//# sourceMappingURL=charts.repositorio.js.map