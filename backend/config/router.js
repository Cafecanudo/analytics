const express = require('express');

module.exports = function (server) {
    console.log('\nLoading routers...');

    //API Routers
    const router = express.Router();
    server.use('/api', router);

    const settingsService = require('../api/settings/settings.service');
    settingsService.register(router, '/settings');

};