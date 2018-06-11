"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const console_util_1 = require("../../utils/console.util");
class RepositoryBase {
    constructor() {
        this._model = mongoose_1.model(this.schema['collectionName'], new mongoose_1.Schema(this.schema.caller(), { collection: this.schema['collectionName'] }));
        console_util_1.default.data(`Collection "${this.schema['collectionName']}" criado no banco de dados.`);
    }
    save(document) {
        return new this._model(document).save();
    }
}
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=repositorio.base.js.map