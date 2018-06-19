"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dados_usuario_model_1 = require("./dados.usuario.model");
class UsuarioModel extends Document {
}
exports.UsuarioModel = UsuarioModel;
exports.usuarioSchema = {
    login: {
        type: String,
        required: true
    },
    dadosUsuario: dados_usuario_model_1.dadosUsuarioSchema
};
//# sourceMappingURL=usuario.model.js.map