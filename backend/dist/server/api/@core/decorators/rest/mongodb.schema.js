"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class MongodbSchema {
    static builder(target, propertyKey, descriptor, collectionName) {
        new MongodbSchema().builder(target, propertyKey, descriptor, collectionName);
    }
    builder(target, propertyKey, descriptor, collectionName) {
        if (typeof collectionName === 'string') {
            mongoose.connection.createCollection(collectionName).catch(err => {
                throw new Error(err);
            });
        }
        descriptor.value = {
            collectionName, caller: descriptor.value
        };
    }
}
exports.MongodbSchema = MongodbSchema;
//# sourceMappingURL=mongodb.schema.js.map