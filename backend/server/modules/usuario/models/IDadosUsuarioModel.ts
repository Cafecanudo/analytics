import { Document } from 'mongoose';

export interface IDadosUsuarioModel extends Document {
    nome: string;
    email: string;
}

export const dadosUsuarioSchema = {
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
};
