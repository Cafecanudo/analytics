import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const errorHandlerApi = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    console.error(`API error handler foi executada: ${err}`);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro Interno do servidor!'
    });
};
