import { IUsuarioModel } from './models/usuario.model';
declare class UsuarioServices {
    obterPerfilUsuario(): Promise<IUsuarioModel>;
}
export declare const usuarioServices: UsuarioServices;
export {};
