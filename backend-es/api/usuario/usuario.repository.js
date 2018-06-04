const { _bcrypt } = require('../../utils/cript.util');
const Entity = require('./usuario.entity');

//salvar usuario
const save = (user, callback) => {
    user.password = _bcrypt.cript(user.password);
    new Entity(user).save(callback);
};

//Buscar usuario por username
const findByUsername = (username, callback) => {
    Entity.findOne({ username }, (err, user) => {
        callback(err, user ? ({ _id, username, lastLogin, perfil } = user) : null)
    });
};

//Verificar usuario e senha
const findByUsernameAndPassword = (username, password, callback) => {
    findByUsername(username, (err, user) => {
        if (err) {
            callback(err, null);
        } else {
            if (user && _bcrypt.compare(password, user.password)) {
                const token = 'token gerado';
                const { _id, username, lastLogin, perfil } = user;
                callback(null, { _id, username, lastLogin, perfil, token });
            } else {
                callback(null, null);
            }
        }
    });


    // password = util._bcrypt(password);
    // Entity.findOne({ username, password }, (err, user) => {
    //     callback(err, user ? ({ _id, username, lastLogin, perfil } = user) : null)
    // });
};

module.exports = {
    Entity,
    save,
    findByUsername,
    findByUsernameAndPassword
};