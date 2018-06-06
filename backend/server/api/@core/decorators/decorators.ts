import ConsoleUtil from '../../../utils/console.util';

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
