import { IDadosUsuarioModel } from './dados.usuario.model';
export interface IUsuarioModel {
    login: string;
    foto?: string;
    dadosUsuario: IDadosUsuarioModel;
}
export declare const usuarioSchema: {
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
