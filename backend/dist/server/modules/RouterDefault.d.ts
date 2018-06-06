import { Application, Request, Response } from 'express';
export declare const pathApi = "/api/v1";
export declare abstract class RouterDefault {
    app: Application;
    private name;
    private readonly router;
    /**
     * Retorna dos as rotas implementadas de um modulo
     * @returns {IRouteTypeModel[]}
     */
    abstract getRoutes(): IRouteTypeModel[];
    /**
     * Substitui nome padrão do modulo
     * @returns {string}
     */
    getPath(): string;
    protected constructor(app: Application);
    registerRoutes(name: string): void;
    private createRoute;
}
export interface IRouteTypeModel {
    type?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    handler: (res: Request, rep: Response) => void;
}
