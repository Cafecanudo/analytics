import { Document } from 'mongoose';
import { dadosUsuarioSchema, IDadosUsuarioModel } from './IDadosUsuarioModel';

/**
 * Interface de modelo de dados do usuario;
 */
export interface IUsuarioModel extends Document {
    login: string;
    foto?: string;
    dadosUsuario: IDadosUsuarioModel;
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
