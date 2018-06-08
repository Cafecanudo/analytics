import 'reflect-metadata';
import { MongodbSchema } from './rest/mongodb.schema';

const formatMetadataKey = Symbol('Inject');

/**
 * Cria a coleção de dados no bootstrap da aplicação.
 * @param {string | {}} collectionName
 * @returns {(target, propertyKey: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
export const MongoDbSchema = (collectionName?: string) => {
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        MongodbSchema.builder(target, propertyKey, descriptor, collectionName);
    };
};

/*export const MongoDbSchema = (documentName?: string | {}) => {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {

        const get = () => {
            return documentName;
        };

        const set = () => {
            return documentName;
        };

        const dqw = Object.defineProperty(target, propertyKey, {get, set});

        console.log(descriptor);
        console.log(propertyKey);
        console.log(target);
        console.log(dqw);

        MongodbSchema.builder(target, propertyKey, documentName);
    };
};*/

/**
 * Injetor de classe
 * @param {string} formatString
 * @returns {{(target: Function): void; (target: Object, propertyKey: (string | symbol)): void}}
 * @constructor
 */
export const Inject = (formatString?: string) => {
    console.log(formatString);
    console.log(formatMetadataKey);
    return Reflect.metadata(formatMetadataKey, formatString);
};

/**
 * Para especificar que classe é um serviço rest
 * @param {Function} constructor
 * @constructor
 */
export const Path = (path?: string | {}) => {
    return (constructor: any) => {
        //console.log(path);
    };
};

/**
 * Especificar que metodo é um servico GET
 * @param {string | {}} path
 * @returns {(target, propertyKey: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
export const GET = (path?: string | {}) => {
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        //ConsoleUtil.data(`Rota ${path} [GET /api/v1/usuario/perfil] registrada`);
        // console.log(target);
        // console.log('-----------------------');
        // console.log(descriptor);
        // console.log('-----------------------');
        // console.log(propertyKey);
    };
};
