import * as _ from 'lodash';

const mergeConfig = _.merge(
    require('./production.env.ts'),
    require(`./${process.env.NODE_ENV}.env.ts`)
);

module.exports = () => mergeConfig;
