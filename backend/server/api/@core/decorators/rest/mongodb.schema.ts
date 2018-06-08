import * as mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const env = require('../../../../config/env/config')();

export class MongodbSchema {

    private readonly mongoDb: string;

    private constructor() {
        this.mongoDb = `mongodb://${env.database.host}${env.database.port ? `:${env.database.port || 27017}` : ''}/${env.database.databasename}`;
    }

    /**
     * Criar collections no banco
     * @param target
     * @param {string} propertyKey
     * @param {PropertyDescriptor} descriptor
     */
    static builder(target, propertyKey: string, descriptor: PropertyDescriptor, documentName?: string) {
        new MongodbSchema().builder(target, propertyKey, descriptor, documentName);
    }

    builder(target, propertyKey: string, descriptor: PropertyDescriptor, documentName?: string) {
        const _db = MongoClient.connect(this.mongoDb, {
            auth: {
                user: env.database.username, password: env.database.password
            }
        }).then(db => {

        });
        // const _db = MongoClient.connect(this.mongoDb, env.database.username, env.database.password);
        _db.cr

        console.log(mongoose.connection.readyState);

        // const _model = model(documentName, new Schema(descriptor.value()));
        // _model.create({
        //     version: '22', lastUpdate: '324'
        // });
        // console.log(mongoose.Schema);
        // console.log(_model);
        console.log('-----------------------');
        console.log(descriptor.value());
        console.log('-----------------------');
        console.log(target);
        console.log('-----------------------');
        console.log(descriptor);
        console.log('-----------------------');
        console.log(propertyKey);
        console.log('-----------------------');
        console.log(documentName);
    }
}
