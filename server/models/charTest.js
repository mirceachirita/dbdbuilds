const mongoose = require('mongoose');

const CharTestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon : {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
}, {collection: 'charsTest'});

module.exports = mongoose.model('CharTestModel', CharTestSchema);