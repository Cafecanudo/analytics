import { TYPES } from './types';

export const atualizarConfiguracoes = (configuracoes) => ({
    type: TYPES.ATUALIZAR_CONFIGURACOES,
    configuracoes: configuracoes
});

export const atualizarBreadcrumbAction = breadcrumb => ({
    type: TYPES.ATUALIZAR_BREADCRUMB,
    breadcrumb: breadcrumb
});
