const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const MessageSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
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

MessageSchema.plugin(mongoosePaginate);

mongoose.model('Message', MessageSchema);