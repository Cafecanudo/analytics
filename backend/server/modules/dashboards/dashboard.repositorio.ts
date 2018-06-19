import { RepositoryBase } from '../../api/@core/repositorio.base';
import { MongoCollection } from '../../api/@core/decorators/decorators';
import { dashboardSchema, IDashboardModel } from './models/IDashboardModel';

class DashboardRepositorio extends RepositoryBase<IDashboardModel> {

    @MongoCollection('dashboard')
    schema() {
        return dashboardSchema;
    }

    obterDashboardName(idDashboard: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const dashboard = {
                principal: true,
                _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                name: 'notas-internalizadas',
                descricao: 'Status de Notas',
                hint: 'IDashboardModel mostra uma visao de todas as notas internalizadas/pendente/cancelado',
                icone: 'fa fa-line-chart'
            };
            resolve(dashboard);
        });
    }

    obterDashboardPerfilUsuario(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve([
                    {
                        principal: true,
                        _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                        name: 'notas-internalizadas',
                        descricao: 'Status de Notas',
                        hint: 'IDashboardModel mostra uma visao de todas as notas internalizadas/pendente/cancelado',
                        icone: 'fa fa-line-chart'
                    }
                ]
            );
        });
    }

}

export const dashboardRepositorio = new DashboardRepositorio();
