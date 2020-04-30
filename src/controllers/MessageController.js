const mongoose = require('mongoose');

const message = mongoose.model('Message');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const messages = await message.paginate({},{page, limit: 10});

        return res.json(messages);
    },

    async show(req, res) {
        const message = await message.findById(req.params.id);

        return res.json(message);
    },

    async store(req, res) {
        const message = await message.create(req.body);

        return res.json(message);
    },

    async update(req, res) {
        const message = await message.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(message);
    },

    async destroy(req, res) {
        await message.findByIdAndRemove(req.params.id);

        return res.send();
    }
};