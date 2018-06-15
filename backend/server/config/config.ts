import * as _ from 'lodash';

const mergeConfig = _.merge(require('./env/env'), {});
module.exports = () => mergeConfig;
