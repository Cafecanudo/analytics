import { RepositoryBase } from '../../api/@core/repositorio.base';
import { MongoCollection } from '../../api/@core/decorators/decorators';
import { chartSchame, IChartModel } from './models/IChartModel';

class ChartsRepositorio extends RepositoryBase<IChartModel> {

    @MongoCollection('chart')
    schema() {
        return chartSchame;
    }

    obterGraficoID(idGrafico: string): Promise<any> {
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

    obterGraficoDashboardID(idDashboard): Promise<any[]> {
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
