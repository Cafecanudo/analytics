import { TYPE } from '../../../main/redux/type.actions';

export const changeUsuarioLoginAction = usuario => ({
    type: TYPE.usuario.USUARIO_LOGIN,
    usuario: usuario
});
