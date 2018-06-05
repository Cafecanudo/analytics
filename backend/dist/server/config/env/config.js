"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var mergeConfig = _.merge(require('./production.env.ts'), require("./" + process.env.NODE_ENV + ".env.ts"));
module.exports = function () { return mergeConfig; };
