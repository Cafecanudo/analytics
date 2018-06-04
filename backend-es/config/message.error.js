const _ = require('lodash');
const mongoose = require('mongoose');

const message = {
    general: {
        default: 'Validator failed for path `{PATH}` with value `{VALUE}`',
        required: 'Path `{PATH}` is required.'
    }
};
mongoose.Error.messages = _.defaults(message, mongoose.Error.messages);