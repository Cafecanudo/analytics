import { RepositoryBase } from '../../api/@core/repositorio.base';
import { IDashboardModel } from './models/IDashboardModel';
declare class DashboardRepositorio extends RepositoryBase<IDashboardModel> {
    schema(): {
        principal: {
            type: BooleanConstructor;
            default: boolean;
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
        hint: StringConstructor;
        icone: {
            type: StringConstructor;
            default: string;
        };
    };
    obterDashboardName(idDashboard: string): Promise<any>;
    obterDashboardPerfilUsuario(): Promise<any>;
}
export declare const dashboardRepositorio: DashboardRepositorio;
export {};
