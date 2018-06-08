"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mongodb_schema_1 = require("./rest/mongodb.schema");
const formatMetadataKey = Symbol('Inject');
exports.MongoDbSchema = (documentName) => {
    return (target, propertyKey, descriptor) => {
        mongodb_schema_1.MongodbSchema.builder(target, propertyKey, descriptor, documentName);
    };
};
/**
 * Injetor de classe
 * @param {string} formatString
 * @returns {{(target: Function): void; (target: Object, propertyKey: (string | symbol)): void}}
 * @constructor
 */
exports.Inject = (formatString) => {
    console.log(formatString);
    console.log(formatMetadataKey);
    return Reflect.metadata(formatMetadataKey, formatString);
};
/**
 * Para especificar que classe é um serviço rest
 * @param {Function} constructor
 * @constructor
 */
exports.Path = (path) => {
    return (constructor) => {
        //console.log(path);
    };
};
/**
 * Especificar que metodo é um servico GET
 * @param {string | {}} path
 * @returns {(target, propertyKey: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
exports.GET = (path) => {
    return (target, propertyKey, descriptor) => {
        //ConsoleUtil.data(`Rota ${path} [GET /api/v1/usuario/perfil] registrada`);
        // console.log(target);
        // console.log('-----------------------');
        // console.log(descriptor);
        // console.log('-----------------------');
        // console.log(propertyKey);
    };
};
