"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const mergeConfig = _.merge(require('./env/env'), {});
module.exports = () => mergeConfig;
//# sourceMappingURL=config.js.map