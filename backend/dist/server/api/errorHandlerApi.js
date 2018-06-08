"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerApi = (err, req, res, next) => {
    console.error(`API error handler foi executada: ${err}`);
    console.error(err);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro Interno do servidor!'
    });
};
//# sourceMappingURL=errorHandlerApi.js.map