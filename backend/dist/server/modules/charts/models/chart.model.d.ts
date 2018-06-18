export declare class ChartModel {
    _id?: string;
    tipo: 'BAR' | 'BAR-COLOR' | 'BAR-COLOR-3D';
    name: string;
    descricao: string;
    order?: number;
    maxcol?: number;
}
export declare const chartSchame: {
    tipo: {
        type: StringConstructor;
        enum: string[];
    };
    name: {
        type: StringConstructor;
        required: boolean;
        unique: boolean;
    };
    descricao: {
        type: StringConstructor;
        required: boolean;
    };
    order: {
        type: NumberConstructor;
        default: number;
        comment: string[];
    };
    maxcol: {
        type: NumberConstructor;
        default: number;
        comment: string[];
    };
};
