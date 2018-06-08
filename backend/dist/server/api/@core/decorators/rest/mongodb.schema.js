"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class MongodbSchema {
    static builder(target, propertyKey, descriptor, documentName) {
        new MongodbSchema().builder(target, propertyKey, descriptor, documentName);
    }
    builder(target, propertyKey, descriptor, documentName) {
        if (typeof documentName === 'string') {
            mongoose.connection.createCollection(documentName).catch(err => {
                throw new Error(err);
            });
            mongoose.model(documentName, new mongoose.Schema(descriptor.value()));
        }
    }
}
exports.MongodbSchema = MongodbSchema;
//# sourceMappingURL=mongodb.schema.js.map