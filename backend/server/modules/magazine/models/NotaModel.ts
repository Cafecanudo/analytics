export class NotaModel {
    tipo: string;
    quantidade: string;
}

export const NotaSchema = {
    tipo: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true,
        default: 0
    }
};
