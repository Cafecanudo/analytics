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
    static builder(target, propertyKey: string, descriptor: PropertyDescriptor, documentName?: string | {}) {
        new MongodbSchema().builder(target, propertyKey, descriptor, documentName);
    }

    builder(target, propertyKey: string, descriptor: PropertyDescriptor, documentName?: string | {}) {
        if (typeof documentName === 'string') {
            mongoose.connection.createCollection(documentName).catch(err => {
                throw new Error(err);
            });
            mongoose.model(documentName, new mongoose.Schema(descriptor.value()));
        }
    }
}
