import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
export declare const errorHandlerApi: (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => void;
