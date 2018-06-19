import { Document } from 'mongoose';

export interface IChartModel extends Document {
    tipo: 'BAR' | 'BAR-COLOR' | 'BAR-COLOR-3D';
    name: string;
    descricao: string;
}

export const chartSchame = {
    tipo: {
        type: String,
        enum: ['BAR', 'BAR-COLOR']
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0,
        comment: ['Diz qual a ordem do grafico na tela']
    },
    maxcol: {
        type: Number,
        default: 3,
        comment: ['Especifica o maximo de graficos que pode colocar ao lado deste. (-1 Nao existe limitacao)']
    }
};
