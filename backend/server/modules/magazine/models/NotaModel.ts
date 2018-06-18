export class NotaModel {

    _id?: string;

    constructor(
        public tipo: 'NFSE' | 'NFE' | 'CTE',
        public integrada: number,
        public erro_integracao: number,
        public erro_no_batimento: number,
        public falta_po: number,
        public reprovada: number,
        public duplicidade: number
    ) {
    }
}

export const NotaSchema = {
    tipo: {
        type: String,
        enum: ['NFSE', 'NFE', 'CTE'],
        unique: true,
        required: true
    },
    integrada: {
        type: Number,
        default: 0,
        required: true
    },
    erro_integracao: {
        type: Number,
        default: 0,
        required: true
    },
    erro_no_batimento: {
        type: Number,
        default: 0,
        required: true
    },
    falta_po: {
        type: Number,
        default: 0,
        required: true
    },
    reprovada: {
        type: Number,
        default: 0,
        required: true
    },
    duplicidade: {
        type: Number,
        default: 0,
        required: true
    }
};
