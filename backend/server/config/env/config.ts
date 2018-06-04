import * as _ from 'lodash';

const mergeConfig = _.merge(
    require(`./production.env.${process.env.EXT || 'ts'}`),
    require(`./${process.env.NODE_ENV}.env.${process.env.EXT || 'ts'}`)
);
module.exports = () => mergeConfig;
