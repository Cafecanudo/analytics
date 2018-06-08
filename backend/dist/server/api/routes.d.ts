import { Application } from 'express';
export default class Routes {
    app: Application;
    constructor(app: Application);
    getRoutes(): void;
    getDataAsync(name: any, routeModule: any): Promise<any>;
    private extracted;
}
