import { DadosUsuarioModel } from './dados.usuario.model';
export declare class UsuarioModel {
    login: string;
    foto?: string;
    dadosUsuario: DadosUsuarioModel;
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
