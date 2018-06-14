import { TYPES } from './types';

export const atualizarUsuarioAction = usuario => ({
    type: TYPES.ATUALIZAR_USUARIO,
    usuario: usuario
});

export const atulizarPerfilMenuAction = perfil => ({
    type: TYPES.ATULIZAR_PERFIL_MENU,
    perfil: perfil
});

