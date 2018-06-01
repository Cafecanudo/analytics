const _ = require('lodash');
const settingsEntity = require('./settings.entity');

console.log('Registring routes of "/settings"...');
settingsEntity.methods(['get', 'post', 'put']);
settingsEntity.updateOptions({new: true, runValidators: true});

settingsEntity
    .after('post', sendErrorOrNext)
    .after('put', sendErrorOrNext);

function sendErrorOrNext(req, res, next) {
    const bundle = res.locals.bundle;
    if (bundle.errors) {
        var erros = parseErrors(bundle.errors);
        res.status(500).json({erros});
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
            message: err.message,
        });
    });
    return errors;
}

//custon api-rest
settingsEntity.route('count', function (req, res, next) {
    settingsEntity.count(function (error, value) {
        if (error) {
            res.status(500).json({errors: [error]});
        } else {
            res.json({value});
        }
    });
});

module.exports = settingsEntity;