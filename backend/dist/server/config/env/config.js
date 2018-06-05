"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const ext = (process.env.NODE_ENV || 'development') === 'test' ? 'js' : 'ts';
const mergeConfig = _.merge(require(`./production.env.${ext}`), require(`./${process.env.NODE_ENV || 'development'}.env.${ext}`));
module.exports = () => mergeConfig;
