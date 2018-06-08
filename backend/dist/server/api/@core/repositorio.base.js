"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class RepositoryBase {
    constructor(dbName, schema) {
        this.model = mongoose_1.model(dbName, schema);
    }
}
exports.RepositoryBase = RepositoryBase;
