"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dados_usuario_model_1 = require("./dados.usuario.model");
exports.usuarioSchema = {
    login: {
        type: String,
        required: true
    },
    dadosUsuario: dados_usuario_model_1.dadosUsuarioSchema
};
//# sourceMappingURL=usuario.model.js.map