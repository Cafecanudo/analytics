export declare class MongodbSchema {
    private readonly mongoDb;
    private constructor();
    /**
     * Criar collections no banco
     * @param target
     * @param {string} propertyKey
     * @param {PropertyDescriptor} descriptor
     */
    static builder(target: any, propertyKey: string, descriptor: PropertyDescriptor, documentName?: string): void;
    builder(target: any, propertyKey: string, descriptor: PropertyDescriptor, documentName?: string): void;
}
