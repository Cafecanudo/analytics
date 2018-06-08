import 'reflect-metadata';
export declare const MongoDbSchema: (documentName?: string | {}) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare const Inject: (formatString?: string) => {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export declare const Path: (path?: string | {}) => (constructor: any) => void;
export declare const GET: (path?: string | {}) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
