import { IDadosUsuarioModel } from './dados.usuario.model';
export declare class UsuarioModel extends Document {
    login: string;
    foto?: string;
    dadosUsuario: IDadosUsuarioModel;
}
export declare const usuarioSchema: {
    login: {
        type: StringConstructor;
        required: boolean;
    };
    dadosUsuario: any;
};
