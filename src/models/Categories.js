const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CategorySchema = new mongoose.Schema({
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

CategorySchema.plugin(mongoosePaginate);

mongoose.model('Category', CategorySchema);