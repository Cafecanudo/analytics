"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
