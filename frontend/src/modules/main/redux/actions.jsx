import { TYPES } from './types';

export const atualizarLoginUsuarioAction = loginUsuario => {
    return ({
        type: TYPES.ATUALIZAR_LOGIN_USUARIO,
        loginUsuario: loginUsuario
    });
}

export const atualizarConfiguracoesAction = configuracoes => ({
    type: TYPES.ATUALIZAR_CONFIGURACOES,
    configuracoes: configuracoes
});

export const atualizarBreadcrumbAction = breadcrumb => ({
    type: TYPES.ATUALIZAR_BREADCRUMB,
    breadcrumb: breadcrumb
});

export const limparBreadcrumbAction = () => ({
    type: TYPES.LIMPAR_BREADCRUMB
});

export const addLinkBreadcrumbAction = breadcrumb => ({
    type: TYPES.ADD_LINK_BREADCRUMB,
    breadcrumb: breadcrumb
});
