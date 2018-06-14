import { TYPE } from '../../../main/redux/type.actions';

const STATE_INITIAL_USUARIO = {
    login: {
        usuario: {
            foto: null,
            dadosUsuario: {
                nome: 'Carregando...'
            }
        }
    }
};

export const usuarioReducer = (state = STATE_INITIAL_USUARIO.login.usuario, action) => {
    switch (action.type) {
        case TYPE.usuario.USUARIO_LOGIN: {
            return action.usuario;
        }
        default:
            return state;
    }
};
