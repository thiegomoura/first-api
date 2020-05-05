const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RoomSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    value: {
        type: mongoose.Decimal128,
    },
    situation: {
        type: Boolean,
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

RoomSchema.plugin(mongoosePaginate);

mongoose.model('Room', RoomSchema);