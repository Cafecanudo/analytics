import { TYPE } from '../../../main/redux/type.actions';

export const atualizarNotificacao = notificacoes => ({
    type: TYPE.usuario.USUARIO_LOGIN,
    notificacoes: notificacoes
});

const STATE_INITIAL_HEADER_MENU = {
    notificacao: {
        notificacoes: [],
        bellColor: 'info',
        bellQuant: 0
    }
};

export const headerMenuReducer = (state = STATE_INITIAL_HEADER_MENU.notificacao, action) => {
    switch (action.type) {
        case TYPE.header_menu.UPDATE_NOTIFICACAO: {
            return action.notificacao;
        }
        default:
            return state;
    }
};
