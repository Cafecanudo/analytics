const _ = require('lodash');
const entity = require('./settings.entity');

console.log('Registring routes of "/settings"...');
entity.methods(['get', 'put']);

//forçando atualização no update
entity.updateOptions({ new: true, runValidators: true });

//criar settings caso nao exista nenhuma
// Entity.before('get', function (req, res, next) {
//     const _d = new Entity({
//         username: 'wellton', password: 'johnys',
//         perfil: {
//             desc_perfil: 'config'
//         }
//     });

//     _d.save(err => {
//         console.log(err);
//         console.log('aaaaaaaaaaaaaaaaa');
//     })

//     console.log(_d);
//     next();
// })

//custon api-rest
entity.route('count', function (req, res, next) {
    entity.count(function (error, value) {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json({ value });
        }
    });
});

module.exports = entity;