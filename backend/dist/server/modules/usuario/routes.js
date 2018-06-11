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
const usuario_repositorio_1 = require("./usuario.repositorio");
let UsuarioRoutes = class UsuarioRoutes extends RouterDefault_1.RouterDefault {
    getRoutes() {
        return [
            {
                path: 'perfil',
                index: this.perfil
            },
            {
                path: 'perfil/nome',
                index: this.nome
            },
            {
                path: 'perfil/menu',
                index: this.menu
            }
        ];
    }
    perfil(req, res) {
        usuario_repositorio_1.usuarioRepositorio.getPerfilUsuario()
            .then(value => res.json(value))
            .catch(err => {
            res.status(err.statusCode).json(err);
        });
    }
    nome(req, res) {
        usuario_repositorio_1.usuarioRepositorio.getPerfilUsuario()
            .then(value => res.json(value.dadosUsuario))
            .catch(err => {
            res.status(err.statusCode).json(err);
        });
    }
    menu(req, res) {
        usuario_repositorio_1.usuarioRepositorio.getMenusUsuario()
            .then(value => res.json(value))
            .catch(err => {
            res.status(err.statusCode).json(err);
        });
    }
};
__decorate([
    decorators_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuarioRoutes.prototype, "perfil", null);
__decorate([
    decorators_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuarioRoutes.prototype, "nome", null);
__decorate([
    decorators_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuarioRoutes.prototype, "menu", null);
UsuarioRoutes = __decorate([
    decorators_1.Path('/usuario')
], UsuarioRoutes);
exports.default = UsuarioRoutes;
//# sourceMappingURL=routes.js.map