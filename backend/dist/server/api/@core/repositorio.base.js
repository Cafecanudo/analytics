"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class RepositoryBase {
    constructor(dbName, schema) {
        this.model = mongoose_1.model(dbName, schema);
    }
    createDocument(item) {
        return new Promise((resolve, reject) => {
            const _n = new this.model(item).save(err => {
                if (!err) {
                    return resolve(_n);
                }
                return reject(err);
            });
        });
    }
}
exports.RepositoryBase = RepositoryBase;
