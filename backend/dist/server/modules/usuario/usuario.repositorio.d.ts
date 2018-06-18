import { RepositoryBase } from '../../api/@core/repositorio.base';
import { UsuarioModel } from './models/usuario.model';
declare class UsuarioRepositorio extends RepositoryBase<UsuarioModel> {
    schema(): {
        login: {
            type: StringConstructor;
            required: boolean;
        };
        dadosUsuario: {
            nome: {
                type: StringConstructor;
                required: boolean;
            };
            email: {
                type: StringConstructor;
                required: boolean;
            };
        };
    };
    obterMenusUsuario(): Promise<any>;
    obterPerfilUsuario(): Promise<UsuarioModel>;
    obterPerfilNotificacaoResumo(): Promise<any>;
}
export declare const usuarioRepositorio: UsuarioRepositorio;
export {};
