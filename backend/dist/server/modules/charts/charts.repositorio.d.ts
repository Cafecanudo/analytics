import { RepositoryBase } from '../../api/@core/repositorio.base';
import { IChartModel } from './models/IChartModel';
declare class ChartsRepositorio extends RepositoryBase<IChartModel> {
    schema(): {
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
    obterGraficoID(idGrafico: string): Promise<any>;
    obterGraficoDashboardID(idDashboard: any): Promise<any[]>;
}
export declare const chartsRepositorio: ChartsRepositorio;
export {};
