import { RepositoryBase } from '../../../api/@core/repositorio.base';
import { IUsuarioModel } from './usuario.model';
declare class UsuarioRepositorio extends RepositoryBase<IUsuarioModel> {
    schema(): {
        version: {
            type: StringConstructor;
            required: boolean;
        };
        lastUpdate: {
            type: DateConstructor;
            required: boolean;
        };
    };
}
export declare const uuarioRepositorio: UsuarioRepositorio;
export {};
