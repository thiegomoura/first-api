const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RoomSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dweller: {
        id: Number,
        name: String,
    },
    value: {
        type: Number,
    },
    situation: {
        type: Boolean,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

RoomSchema.plugin(mongoosePaginate);

mongoose.model('Room', RoomSchema);