const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DwellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    nested: {
        firstName: {type: String},
        lastName: {type: String}
    },
    email: {
        type: String
    },
    cpf: {
        type: String
    },
    telephone: {
        type: Intl
    },
    photoURL: {
        type: String
    },
    debit: [{
        _objectid: Schema.Types.ObjectId,
        monthRef: Date,
        description: String,
        value: Schema.Types.Decimal128,
    }],
    room: {
        _objectid: Schema.Types.ObjectId,
        description:  String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

DwellerSchema.plugin(mongoosePaginate);

mongoose.model('Dweller', DwellerSchema);