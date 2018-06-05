// import { Document, model, Model, Schema } from 'mongoose';
//
// export interface IConfiguracaoModel extends Document {
//     timeUpdate: number;
//     nameApp: string;
// }
//
// const configuracaoSchema: Schema = new Schema({
//     timeUpdate: {
//         type: Number, min: 1000, max: 60000 * 60, required: true
//     },
//     nameApp: {
//         type: String, maxlength: 40, required: true
//     }
// });
//
// export const ConfiguracaoSchema: Model<IConfiguracaoModel> = model<IConfiguracaoModel>('configuracao', configuracaoSchema);
//
// export class ConfiguracaoModel {
//
//     constructor(public configuracaoModel: IConfiguracaoModel) {
//
//     }
// }
//
// //
// //
// //
// // import * as mongoose from 'mongoose';
// //
// // export let schema = mongoose.Schema;
// // export let ObjectId = mongoose.Schema.Types.ObjectId;
// // export let Mixed = mongoose.Schema.Types.Mixed;
// //
// // export interface IConfiguracaoModel extends mongoose.Document {
// //     timeUpdate: number;
// //     nameApp: string;
// // }
// //
// // const configuracaoSchema: mongoose.Schema = new mongoose.Schema({
// //     timeUpdate: {
// //         type: Number, min: 1000, max: 60000 * 60, required: true
// //     },
// //     nameApp: {
// //         type: String, maxlength: 40, required: true
// //     }
// // });
// //
// // export const ConfiguracaoModel: mongoose.Model<IConfiguracaoModel> = mongoose.model<IConfiguracaoModel>('configuracao', configuracaoSchema);
//
