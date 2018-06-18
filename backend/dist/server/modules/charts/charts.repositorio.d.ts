import { RepositoryBase } from '../../api/@core/repositorio.base';
import { ChartModel } from './models/chart.model';
declare class ChartsRepositorio extends RepositoryBase<ChartModel> {
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
    obterGraficoID(idGrafico: string): Promise<ChartModel>;
    obterGraficoDashboardID(idDashboard: any): Promise<ChartModel[]>;
}
export declare const chartsRepositorio: ChartsRepositorio;
export {};
