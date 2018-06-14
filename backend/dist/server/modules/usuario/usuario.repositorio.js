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
const decorators_1 = require("../../api/@core/decorators/decorators");
const repositorio_base_1 = require("../../api/@core/repositorio.base");
const usuario_model_1 = require("./models/usuario.model");
class UsuarioRepositorio extends repositorio_base_1.RepositoryBase {
    schema() {
        return usuario_model_1.usuarioSchema;
    }
    obterMenusUsuario() {
        return new Promise((resolve, reject) => {
            resolve({
                dashboards: [
                    {
                        principal: true,
                        _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                        name: 'resumo',
                        descricao: 'Resumo',
                        hint: 'Resumo com os principais gráficos',
                        icone: 'fa fa-line-chart'
                    },
                    {
                        _id: 'c16a3b1af0746dcf4c5319015fc02865',
                        name: 'contingencia',
                        descricao: 'Contingência',
                        icone: 'fa fa-area-chart'
                    },
                    {
                        _id: '7f003b62c582d1040942285839585e54',
                        name: 'notas-divergentes',
                        descricao: 'Notas Divegentes',
                        icone: 'fa fa-bar-chart'
                    },
                    {
                        descricao: 'Sem Dashboard',
                        icone: 'fa fa-exclamation-circle',
                        hint: 'Você não possuir dashboards cadastradas para seu perfil.'
                    }
                ],
                grupo_menus: [
                    {
                        menus: [
                            {
                                _id: '6e90cffbe969c4e39ec755ae04465da5',
                                tipo: 'GRAFICO',
                                name: 'contingencia',
                                descricao: 'Contingência',
                                icone: 'fa fa-bar-chart'
                            },
                            {
                                _id: '13f5a88115b5488b6c31e9aadfc56dd6',
                                tipo: 'GRAFICO',
                                name: 'notas-divergentes',
                                descricao: 'Notas Divegentes',
                                icone: 'fa fa-line-chart'
                            }
                        ]
                    },
                    {
                        titulo: 'Configurações',
                        menus: [
                            {
                                _id: '2b08b9562dd8095452efe2c26fdfa3ff',
                                tipo: 'PAGE',
                                name: 'geral',
                                descricao: 'Geral',
                                icone: 'fa fa-sliders',
                                url: 'configuracao/geral'
                            },
                            {
                                _id: '07c3c9642100fdc4d5bd635e1d8f1558',
                                tipo: 'PAGE',
                                name: 'graficos',
                                descricao: 'Gráficos',
                                icone: 'fa fa-bar-chart',
                                url: 'configuracao/graficos'
                            }
                        ]
                    }
                ]
            });
        });
    }
    obterPerfilUsuario() {
        return new Promise((resolve, reject) => {
            resolve({
                login: 'cafecanudo',
                foto: 'https://belicosa.com.br/novo/wp-content/uploads/2013/02/belicosa-mariaaugusta.jpg',
                dadosUsuario: {
                    nome: 'Renata Silva',
                    email: 'cafecanudo@gmail.com'
                }
            });
        });
    }
    obterPerfilNotificacaoResumo() {
        return new Promise((resolve, reject) => {
            resolve({
                notificacao: [
                    {
                        tipo: 'MESSAGE',
                        icone: 'fa fa-envelope',
                        quant: 4,
                        descricao: 'Novas mensagens',
                        ultima: '3 min'
                    },
                    {
                        tipo: 'ACTIVIT',
                        icone: 'fa fa-database',
                        quant: 2,
                        descricao: 'Notas com duplicadas',
                        ultima: '34 min'
                    },
                    {
                        tipo: 'ALERTAS',
                        icone: 'fa fa-refresh',
                        quant: 22,
                        descricao: 'Notas com Rejeitadas',
                        ultima: '1 Hora'
                    },
                    {
                        tipo: 'ALERTAS',
                        icone: 'fa fa-exclamation-triangle',
                        quant: 423,
                        descricao: 'Notas em contingência',
                        ultima: '10 min'
                    }
                ]
            });
        });
    }
}
__decorate([
    decorators_1.MongoDbSchema('usuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioRepositorio.prototype, "schema", null);
exports.usuarioRepositorio = new UsuarioRepositorio();
//# sourceMappingURL=usuario.repositorio.js.map