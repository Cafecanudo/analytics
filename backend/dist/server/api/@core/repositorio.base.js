"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const console_util_1 = require("../../utils/console.util");
const uniqueValidator = require('mongoose-unique-validator');
class RepositoryBase {
    constructor() {
        this._schema = new mongoose_1.Schema(this.schema.caller(), { collection: this.schema['collectionName'] });
        this._model = mongoose_1.model(this.schema['collectionName'], this._schema);
        this._schema.plugin(uniqueValidator);
        console_util_1.default.data(`Collection "${this.schema['collectionName']}" criado no banco de dados.`);
    }
    save(document) {
        return new this._model(document).save();
    }
}
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=repositorio.base.js.map