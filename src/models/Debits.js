const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DebitSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: Intl,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    situation: {
        type: Boolean,
        required: true,
    },
    reference: {
        type: Date,
    },
    dueDate: {
        type: Date,
    },
    dwellers: [{
        id: Number,
        name: String,
    }],
    default: {
        type: Boolean,
        required: true,
    },
    observation: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

DebitSchema.plugin(mongoosePaginate);

mongoose.model('Debit', DebitSchema);