import { RepositoryBase } from '../../api/@core/repositorio.base';
import { IUsuarioModel } from './models/usuario.model';
declare class UsuarioRepositorio extends RepositoryBase<IUsuarioModel> {
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
    obterPerfilUsuario(): Promise<IUsuarioModel>;
    obterPerfilNotificacaoResumo(): Promise<any>;
}
export declare const usuarioRepositorio: UsuarioRepositorio;
export {};
