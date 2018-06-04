"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerAPI(err, req, res, next) {
    console.error(`API error handler was executed: ${err}`);
    console.error(err);
    res.status(500).json({
        errorCode: 'ERR-0001', message: 'Error Internal from server!'
    });
}
exports.errorHandlerAPI = errorHandlerAPI;
;
