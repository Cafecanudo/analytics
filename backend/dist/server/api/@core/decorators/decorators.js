"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mongodb_schema_1 = require("./rest/mongodb.schema");
const formatMetadataKey = Symbol('Inject');
exports.MongoDbSchema = (collectionName) => {
    return (target, propertyKey, descriptor) => {
        mongodb_schema_1.MongodbSchema.builder(target, propertyKey, descriptor, collectionName);
    };
};
exports.Inject = (formatString) => {
    console.log(formatString);
    console.log(formatMetadataKey);
    return Reflect.metadata(formatMetadataKey, formatString);
};
exports.Path = (path) => {
    return (constructor) => {
    };
};
exports.GET = (path) => {
    return (target, propertyKey, descriptor) => {
    };
};
//# sourceMappingURL=decorators.js.map