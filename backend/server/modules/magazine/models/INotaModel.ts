import { Document } from 'mongoose';

export interface INotaModel extends Document {
    tipo: 'NFSE' | 'NFE' | 'CTE';
    integrada: number;
    erro_integracao: number;
    erro_no_batimento: number;
    falta_po: number;
    reprovada: number;
    duplicidade: number;
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
