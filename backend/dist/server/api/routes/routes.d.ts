import { Application } from 'express';
export default class Routes {
    app: Application;
    constructor(app: Application);
    getRoutes(): void;
    /**
     * Busca todos os arquivos routes.ts dentro da pasta
     * ./server/modules, adicionar e crias suas rotas
     */
    private extracted;
    /**
     * Faz import dinamico das routes.js
     * @param routeModule
     * @returns {Promise<void>}
     */
    getDataAsync(routeModule: any): Promise<any>;
}
