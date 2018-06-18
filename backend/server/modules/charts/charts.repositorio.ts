import { RepositoryBase } from '../../api/@core/repositorio.base';
import { MongoCollection } from '../../api/@core/decorators/decorators';
import { ChartModel, chartSchame } from './models/chart.model';

class ChartsRepositorio extends RepositoryBase<ChartModel> {

    @MongoCollection('chart')
    schema() {
        return chartSchame;
    }

    obterGraficoID(idGrafico: string): Promise<ChartModel> {
        return new Promise((resolve, reject) => {
            resolve({
                _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                tipo: 'BAR-COLOR-3D',
                name: 'notas-internalizadas',
                descricao: 'Status de Notas',
                order: 0,
                maxcol: 1
            });
        });
    }

    obterGraficoDashboardID(idDashboard): Promise<ChartModel[]> {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                    tipo: 'BAR-COLOR-3D',
                    name: 'notas-internalizadas',
                    descricao: 'Status de Notas',
                    order: 0,
                    maxcol: 1
                }
            ]);
        });
    }

}

export const chartsRepositorio = new ChartsRepositorio();
