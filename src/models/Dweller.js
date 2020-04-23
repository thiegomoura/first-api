const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DwellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    room: {
        type: Intl,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

DwellerSchema.plugin(mongoosePaginate);

mongoose.model('Dweller', DwellerSchema);