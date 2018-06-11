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
    getMenusUsuario() {
        return new Promise((resolve, reject) => {
            resolve({
                dashboards: [
                    {
                        preload: true,
                        _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                        descricao: 'Resumo'
                    }
                ],
                grupo_menus: [
                    {
                        titulo: null,
                        menus: [
                            {
                                _id: '6e90cffbe969c4e39ec755ae04465da5',
                                tipo: 'GRAFICO',
                                descricao: 'Contingência',
                                icone: null,
                                url: null
                            },
                            {
                                _id: '13f5a88115b5488b6c31e9aadfc56dd6',
                                tipo: 'GRAFICO',
                                descricao: 'Notas Divegentes',
                                icone: null,
                                url: null
                            }
                        ]
                    },
                    {
                        titulo: 'Configurações',
                        menus: [
                            {
                                _id: '2b08b9562dd8095452efe2c26fdfa3ff',
                                tipo: 'PAGE',
                                descricao: 'Geral',
                                icone: 'fa fa-sliders',
                                url: 'settings/geral'
                            },
                            {
                                _id: '07c3c9642100fdc4d5bd635e1d8f1558',
                                tipo: 'PAGE',
                                descricao: 'Graficos',
                                icone: 'fa fa-bar-chart',
                                url: 'settings/geral'
                            }
                        ]
                    }
                ]
            });
        });
    }
    getPerfilUsuario() {
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
}
__decorate([
    decorators_1.MongoDbSchema('usuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioRepositorio.prototype, "schema", null);
exports.usuarioRepositorio = new UsuarioRepositorio();
//# sourceMappingURL=usuario.repositorio.js.map