"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class RepositoryBase {
    constructor() {
        this._model = mongoose_1.model('', new mongoose_1.Schema(this.schema()));
    }
    save(document) {
        return new this._model(document).save();
    }
}
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=repositorio.base.js.map