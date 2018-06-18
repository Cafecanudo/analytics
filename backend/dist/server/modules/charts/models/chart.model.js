"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChartModel {
    constructor() {
        this.order = 0;
        this.maxcol = 3;
    }
}
exports.ChartModel = ChartModel;
exports.chartSchame = {
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
//# sourceMappingURL=chart.model.js.map