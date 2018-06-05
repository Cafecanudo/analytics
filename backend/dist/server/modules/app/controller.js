"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfiguracaoController {
    /**
     * Retornada configurações do sistema
     * @param {e.Request} req
     * @param {e.Response} res
     */
    getConfiguracao(req, res) {
        res.status(200).json({
            timeUpdate: 3000, nameApp: 'nameApp'
        });
    }
}
