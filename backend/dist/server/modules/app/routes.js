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
const configuracaoModel_1 = require("./models/configuracaoModel");
let AplicacaoRoutes = class AplicacaoRoutes extends RouterDefault_1.RouterDefault {
    getRoutes() {
        return [
            { path: '/', handler: this.index }
        ];
    }
    index(req, res) {
        configuracaoModel_1.configuracaoRepo.save({
            version: '1', lastUpdate: new Date()
        }).then(value => {
            res.json(value);
        }).catch(err => {
            res.status(500).send(err);
        });
    }
};
__decorate([
    decorators_1.GET('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AplicacaoRoutes.prototype, "index", null);
AplicacaoRoutes = __decorate([
    decorators_1.Path('/app')
], AplicacaoRoutes);
exports.default = AplicacaoRoutes;
//# sourceMappingURL=routes.js.map