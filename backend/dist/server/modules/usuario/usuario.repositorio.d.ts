import { RepositoryBase } from '../../api/@core/repositorio.base';
import { IUsuarioModel } from './models/IUsuarioModel';
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
    login(login: any, senha: any): Promise<any>;
    obterMenusUsuario(): Promise<any>;
    obterPerfilUsuario(): Promise<any>;
    obterPerfilNotificacaoResumo(): Promise<any>;
}
export declare const usuarioRepositorio: UsuarioRepositorio;
export {};
