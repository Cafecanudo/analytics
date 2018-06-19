import favicon from '../../../resources/images/favicon.png';
import { TYPES } from './types';

const ESTADO_INICIAL = {
    loginUsuario: {},
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

export const applicationReducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case TYPES.ATUALIZAR_LOGIN_USUARIO: {
            return {
                ...state,
                loginUsuario: action.loginUsuario
            };
        }
        case TYPES.ATUALIZAR_CONFIGURACOES: {
            return action.configuracoes;
        }
        case TYPES.ADD_LINK_BREADCRUMB: {
            console.log('ALTERAR**********');
            return 1;
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
        case TYPES.LIMPAR_BREADCRUMB: {
            return {
                configuracao: {
                    ...state.configuracao
                },
                application: {
                    ...state.application,
                    breadcrumb: {}
                }
            };
        }
        default:
            return state;
    }
};