/**
 * Para especificar que classe é um serviço rest
 * @param {Function} constructor
 * @constructor
 */
export declare const Path: (path?: string | {}) => (constructor: any) => void;
/**
 * Especificar que metodo é um servico GET
 * @param {string | {}} path
 * @returns {(target, propertyKey: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
export declare const GET: (path?: string | {}) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
