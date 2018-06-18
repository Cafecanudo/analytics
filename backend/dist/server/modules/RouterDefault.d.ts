import { Application, Request, Response } from 'express';
export declare const pathApi = "/api/v1";
export declare abstract class RouterDefault {
    app: Application;
    private name;
    private readonly router;
    protected constructor(app: Application);
    postConstructor(): void;
    abstract getRoutes(): RouteTypeModel[];
    getPath(): string;
    registerRoutes(name: string): void;
    private createRoute;
}
export declare class RouteTypeModel {
    type?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path?: string;
    index: (res: Request, rep: Response) => void;
}
