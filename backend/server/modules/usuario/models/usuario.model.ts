import { DadosUsuarioModel, dadosUsuarioSchema } from './dados.usuario.model';

/**
 * Interface de modelo de dados do usuario;
 */
export class UsuarioModel {
    login: string;
    foto?: string;
    dadosUsuario: DadosUsuarioModel;
}

/**
 * Schema do banco de dados de usuario
 * @type {{version: {type: StringConstructor; required: boolean}; lastUpdate: {type: DateConstructor; required: boolean}}}
 */
export const usuarioSchema = {
    login: {
        type: String,
        required: true
    },
    dadosUsuario: dadosUsuarioSchema
};
