import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export function errorHandlerAPI(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handler was executed: ${err}`);
    console.error(err);
    res.status(500).json({
        errorCode: 'ERR-0001', message: 'Error Internal from server!'
    });
};
