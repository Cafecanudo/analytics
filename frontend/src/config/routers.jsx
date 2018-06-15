import Inicio from '../modules/inicio/inicio';
import Dashboard from '../modules/dashboard/dashboard';
import NoFound from '../modules/nofound/nofound';

export const ApiRouter = () => {
    return [
        {
            path: '/', component: Inicio
        },
        {
            path: '/inicio', exact: true, component: Inicio
        },
        {
            path: '/dashboard/:name', exact: true, component: Dashboard
        },
        {
            component: NoFound
        }

    ];
};
