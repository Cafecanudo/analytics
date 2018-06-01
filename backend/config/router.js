const express = require('express');

function sendErrorOrNext(req, res, next) {
    const bundle = res.locals.bundle;
    if (bundle.errors) {
        var erros = parseErrors(bundle.errors);
        res.status(500).json({ erros });
    } else {
        next();
    }
}

function parseErrors(nodeRestErros) {
    const errors = [];
    _.forIn(nodeRestErros, err => {
        errors.push({
            type: err.properties.type,
            path: err.path,
            message: err.message
        });
    });
    return errors;
}

module.exports = function (server) {
    console.log('\nLoading routers...');

    //API Routers
    const router = express.Router({});
    server.use('/api', router);

    const settingsService = require('../api/settings/settings.service');
    settingsService.register(router, '/settings');
    settingsService.after('put', sendErrorOrNext);

    const usuarioService = require('../api/usuario/usuario.service');
    router.route('/login').post(function (req, res, next) {
        usuarioService.login(req, res, next);
    });
};