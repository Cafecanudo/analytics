import { Document } from 'mongoose';

export interface IDashboardModel extends Document  {
    principal: false;
    name: string;
    descricao: string;
    hint: string;
    icone: string;
}

export const dashboardSchema = {
    principal: {
        type: Boolean,
        default: false
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
    hint: String,
    icone: {
        type: String,
        default: 'fa fa-line-chart'
    }
};
