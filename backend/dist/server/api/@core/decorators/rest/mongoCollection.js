"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class MongoCollection {
    static builder(target, propertyKey, descriptor, collectionName) {
        new MongoCollection().builder(target, propertyKey, descriptor, collectionName);
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
exports.MongoCollection = MongoCollection;
//# sourceMappingURL=mongoCollection.js.map