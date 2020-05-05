const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DebitSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    value: {
        type: mongoose.Decimal128,
        required: true,
    },
    situation: {
        type: Boolean,
        required: true,
    },
    default: {
        type: Boolean,
        required: true,
    },
    observation: {
        type: String,
    },
    monthReference: {
        type: Date,
        required: true,
    },
    dueDate: {
        type: Date,
    },
    origin: {
        _objectid: String,
        description: String,
        valueOrigim: mongoose.Decimal128,
    },
    category: {
        _objectid: String,
        description: String,
    },
    dweller: {
        _objectid: String,
        name: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

DebitSchema.plugin(mongoosePaginate);

mongoose.model('Debit', DebitSchema);