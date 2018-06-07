"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Interface do modelo
 */
//import { Document, Schema } from 'mongoose';
const mongoose = require("mongoose");
/**
 * Criando schema de dados
 * @type {module:mongoose.Schema}
 */
exports.configuracaoSchema = new mongoose.Schema({
    version: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: Date,
        required: true
    }
});
