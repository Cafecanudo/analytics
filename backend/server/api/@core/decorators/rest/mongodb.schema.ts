import * as mongoose from 'mongoose';

/**
 * Decorador criar coleção no banco de dados
 */
export class MongodbSchema {

    /**
     * Criar collections no banco
     * @param target
     * @param {string} propertyKey
     * @param {PropertyDescriptor} descriptor
     */
    static builder(target, propertyKey: string, descriptor: PropertyDescriptor, collectionName?: string) {
        new MongodbSchema().builder(target, propertyKey, descriptor, collectionName);
    }

    builder(target, propertyKey: string, descriptor: PropertyDescriptor, collectionName?: string) {
        if (typeof collectionName === 'string') {
            mongoose.connection.createCollection(collectionName).catch(err => {
                throw new Error(err);
            });
        }
        descriptor.value = {
            collectionName, caller: descriptor.value
        };
    }
}
