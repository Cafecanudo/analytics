const env = require('../config/.env');
const bcrypt = require('bcrypt');
const _ = require('lodash');

//Encriptar dados, usado para chaves
const _bcrypt = (_t) => bcrypt.hashSync(_t, bcrypt.genSaltSync());
const _bcryptCompare = (_t, _p) => bcrypt.compareSync(_t, _p);

module.exports = {
    _,
    env,
    _bcrypt: {
        cript: _bcrypt,
        compare: _bcryptCompare
    }
};