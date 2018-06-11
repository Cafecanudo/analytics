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
const decorators_1 = require("../../../api/@core/decorators/decorators");
const repositorio_base_1 = require("../../../api/@core/repositorio.base");
const usuario_model_1 = require("./usuario.model");
class UsuarioRepositorio extends repositorio_base_1.RepositoryBase {
    schema() {
        return usuario_model_1.schemaUsuarioModel;
    }
}
__decorate([
    decorators_1.MongoDbSchema('usuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioRepositorio.prototype, "schema", null);
exports.uuarioRepositorio = new UsuarioRepositorio();
//# sourceMappingURL=usuario.repositorio.js.map