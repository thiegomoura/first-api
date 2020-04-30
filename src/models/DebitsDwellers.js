const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DebitDwellerSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    value: {
        type: Schema.Types.Decimal128,
        required: true,
    },
    ratio: {
        type: Boolean,
        required: true,
    },
    default: {
        type: Boolean,
        required: true,
    },
    dweller: [{
        _objectid: Schema.Types.ObjectId,
        name: String,
    }],
    category: {
        _objectid: Schema.Types.ObjectId,
        description: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

DebitDwellerSchema.plugin(mongoosePaginate);

mongoose.model('DebitDweller', DebitDwellerSchema);