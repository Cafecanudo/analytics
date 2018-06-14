import favicon from '../../../resources/images/favicon.png';
import { TYPES } from './types';

const ESTATO_INICIAL = {
    configuracao: {
        name: 'ELDOC Analytcs',
        favicon: favicon
    },
    application: {
        breadcrumb: {
            title: 'Dashboard',
            link: []
        }
    }
};

export const applicationReducer = (state = ESTATO_INICIAL, action) => {
    switch (action.type) {
        case TYPES.ATUALIZAR_CONFIGURACOES: {
            return action.configuracoes;
        }
        case TYPES.ATUALIZAR_BREADCRUMB: {
            return {
                configuracao: {
                    ...state.configuracao
                },
                application: {
                    ...state.application,
                    breadcrumb: action.breadcrumb
                }
            };
        }
        default:
            return state;
    }
};