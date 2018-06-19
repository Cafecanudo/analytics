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
const dashboard_repositorio_1 = require("../dashboards/dashboard.repositorio");
const IUsuarioModel_1 = require("./models/IUsuarioModel");
class UsuarioRepositorio extends repositorio_base_1.RepositoryBase {
    schema() {
        return IUsuarioModel_1.usuarioSchema;
    }
    login(login, senha) {
        console.log(login, senha);
        return new Promise((resolve, reject) => {
            if (login === 'admin@softbox.com.br' && senha === 'johny') {
                this.obterPerfilUsuario().then(value => {
                    resolve(value);
                });
            }
            else {
                resolve({
                    statusCode: 403,
                    message: 'Usuário ou senha inválida!'
                });
            }
        });
    }
    obterMenusUsuario() {
        return new Promise((resolve, reject) => {
            dashboard_repositorio_1.dashboardRepositorio.obterDashboardPerfilUsuario().then(dashboards => {
                resolve({
                    dashboards: dashboards,
                    grupo_menus: [
                        {
                            menus: [
                                {
                                    _id: '6e90cffbe969c4e39ec755ae04465da5',
                                    tipo: 'GRAFICO',
                                    name: 'notas-nfs-e',
                                    descricao: 'NFS-e',
                                    hint: 'Notas Fiscais de Serviços Eletrônicas',
                                    icone: 'fa fa-bar-chart'
                                },
                                {
                                    _id: '62bf79144f4112d070a6b48f6f621c21',
                                    tipo: 'GRAFICO',
                                    name: 'notas-nf-e',
                                    descricao: 'NF-e',
                                    hint: 'Notas Fiscais de Eletrônicas\'',
                                    icone: 'fa fa-bar-chart'
                                },
                                {
                                    _id: '2b08b9562dd8095452efe2c26fdfa3ff',
                                    tipo: 'GRAFICO',
                                    name: 'notas-ct-e',
                                    descricao: 'CT-e',
                                    hint: 'Notas de Conhecimento de Transporte Eletrônico',
                                    icone: 'fa fa-bar-chart'
                                }
                            ]
                        }
                    ]
                });
            }).catch(reason => {
                reject(reason);
            });
        });
    }
    obterPerfilUsuario() {
        return new Promise((resolve, reject) => {
            resolve({
                login: 'magazineluiza',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8DxY9BZGJm4XRk1yzaxVymx6n3chfn2B02k2hlEGP3oTVNbpPw',
                dadosUsuario: {
                    nome: 'Magazine Luiza',
                    email: 'magazineluiza@softbox.com.br'
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
    decorators_1.MongoCollection('usuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioRepositorio.prototype, "schema", null);
exports.usuarioRepositorio = new UsuarioRepositorio();
//# sourceMappingURL=usuario.repositorio.js.map