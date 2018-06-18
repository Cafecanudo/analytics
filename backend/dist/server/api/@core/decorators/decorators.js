"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mongodb_schema_1 = require("./rest/mongodb.schema");
const console_util_1 = require("../../../utils/console.util");
const listOfCollection = [];
const formatMetadataKey = Symbol('Inject');
exports.MongoCollection = (collectionName) => {
    return (target, propertyKey, descriptor) => {
        listOfCollection.find(value => {
            if (value === collectionName) {
                console_util_1.default.error(`Ja existe uma collection com nome "@MongoCollection('${collectionName}')". `
                    + `Classe "${target.constructor.name}.ts".`);
                process.exit(1);
            }
            return false;
        });
        listOfCollection.push(collectionName);
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
exports.POST = (path) => {
    return (target, propertyKey, descriptor) => {
    };
};
//# sourceMappingURL=decorators.js.map