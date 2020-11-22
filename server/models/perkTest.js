const mongoose = require('mongoose');

const PerkTestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
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
    character: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CharTestModel'
    }
}, {collection: 'perksTest'});

module.exports = mongoose.model('PerksTestModel', PerkTestSchema);