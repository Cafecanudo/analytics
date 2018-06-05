"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.settingsSchema = new mongoose_1.Schema({
    timeUpdate: {
        type: Number, min: 1000, max: 60000 * 60, required: true
    },
    nameApp: {
        type: String, maxlength: 40, required: true
    }
});
exports.SettingsModel = mongoose_1.model('configuracao', exports.settingsSchema);
