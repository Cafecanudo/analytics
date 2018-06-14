import { TYPES } from './types';

export const atualizarNotificacoesAction = notificacoes => ({
    type: TYPES.ATUALIZAR_NOTIFICACOES,
    notificacoes: notificacoes
});

export const addNotificacaoAction = notificacao => ({
    type: TYPES.ADD_NOTIFICACAO,
    notificacao: notificacao
});