import { TYPES } from './types';

import noUserFoto from '../../../resources/images/no-user-photo.png';

const ESTADO_INICIAL = {
    usuario: {
        foto: noUserFoto,
        dadosUsuario: {}
    },
    perfil: {
        dashboards: [],
        grupo_menus: []
    }
};

export const sidebarReducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case TYPES.ATUALIZAR_USUARIO: {
            return { ...state, ...action.usuario };
        }
        case TYPES.ATULIZAR_PERFIL_MENU: {
            return { ...state, perfil: action.perfil };
        }
        default:
            return state;
    }
};

