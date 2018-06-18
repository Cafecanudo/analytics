export class ChartModel {
    _id?: string;
    tipo: 'BAR' | 'BAR-COLOR' | 'BAR-COLOR-3D';
    name: string;
    descricao: string;
    order?: number = 0;
    maxcol?: number = 3;
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
