import Inicio from '../components/pages/inicio';
import NoFound from '../components/pages/nofound';
import Configuracao from '../components/pages/configuracao';

export const ApiRouter = () => {
    return [
        {
            path: '/', component: Inicio
        },
        {
            path: '/Inicio', exact: true, component: Inicio
        },
        {
            path: '/configuracao/geral', component: Configuracao
        },
        {
            component: NoFound
        }
    ];
};
