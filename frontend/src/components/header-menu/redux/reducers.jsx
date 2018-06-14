import { TYPES } from './types';

const ESTADO_INICIAL = {
    urlInicial: '/inicio',
    notificacao: {
        lista: []
    }
};

export const headerMenuReducer = (state = ESTADO_INICIAL, action) => {
    const extracted = lista => {
        let bellQuant = 0, bellColor = 'info';
        lista.forEach(el => {
            bellQuant += el.quant;
            if (el.tipo === 'ALERTAS') {
                bellColor = 'danger';
            }
        });
        return {
            ...state,
            notificacao: {
                lista: lista,
                bellQuant: bellQuant,
                bellColor: bellColor
            }
        };
    };

    switch (action.type) {
        case TYPES.ADD_NOTIFICACAO: {
            state.notificacao.lista.push(action.notificacao);
            return extracted(state.notificacao.lista);
        }
        case TYPES.ATUALIZAR_NOTIFICACOES: {
            return extracted(action.notificacoes);
        }
        default:
            return state;
    }
};