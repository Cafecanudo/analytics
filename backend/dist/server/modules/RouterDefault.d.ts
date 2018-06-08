import { Application, Request, Response } from 'express';
export declare const pathApi = "/api/v1";
export declare abstract class RouterDefault {
    app: Application;
    private name;
    private readonly router;
    protected constructor(app: Application);
    /**
     * Executado apos classe se contruida
     */
    postConstructor(): void;
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
    registerRoutes(name: string): void;
    private createRoute;
}
export interface IRouteTypeModel {
    type?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    handler: (res: Request, rep: Response) => void;
}
