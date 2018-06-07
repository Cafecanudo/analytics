"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryBase {
    constructor(model) {
        this.model = model;
    }
    novo(item, callback) {
        console.log('Criando novo registro...');
    }
}
exports.RepositoryBase = RepositoryBase;
