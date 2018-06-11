export interface IDadosUsuarioModel {
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
