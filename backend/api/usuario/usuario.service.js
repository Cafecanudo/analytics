const { env } = require('../../utils/cript.util');
const repository = require('./usuario.repository');

console.log('Registring routes of "/user"...');

//Register primary user
const registrPrimaryUser = () => {
    repository.findByUsername(env.softbox.username, (err, userPrimary) => {
        if (!userPrimary) {
            repository.save({
                username: env.softbox.username, password: env.softbox.passwordAdminStart,
                perfil: {
                    desc_perfil: env.softbox.perfilName
                }
            }, (err, user) => {
                if (!user) {
                    throw new Error('Don\'t exist default user, so I tried to create, but it was not possible, check this problem!');
                }
            });
        }
    });
};

//efetuar login
const login = (req, res, next) => {
    const username = req.body.username || '';
    const password = req.body.password || '';

    repository.findByUsernameAndPassword(username, password, (err, user) => {
        if (user) {
            res.json(user);
        } else {
            res.status(400).send({ errors: ['Invalid user or password'] });
        }
    });
};

registrPrimaryUser();
module.exports = { Entity: repository.Entity, login };