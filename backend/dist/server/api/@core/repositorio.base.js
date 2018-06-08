"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class RepositoryBase {
    constructor() {
        this._model = mongoose_1.model('configuracao', new mongoose_1.Schema(this.schema.caller()));
    }
    getCollection() {
        console.log('NNNNAAAAO');
    }
    save(document) {
        return new this._model(document).save();
    }
}
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=repositorio.base.js.map