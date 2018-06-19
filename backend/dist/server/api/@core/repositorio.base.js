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
    saveOrUpdate(params, document) {
        return new Promise((resolve, reject) => {
            const daw = this._model.findOneAndUpdate(params, document, {
                new: true, upsert: true,
                runValidators: true
            }).then(res => {
                console.log(res);
                resolve(res);
            }).catch(reason => {
                console.log(reason);
                reject(reason);
            });
            console.log(daw);
        });
    }
}
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=repositorio.base.js.map