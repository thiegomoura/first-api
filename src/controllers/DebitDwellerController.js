const mongoose = require('mongoose');

const debitDweller = mongoose.model('DebitDweller');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const debitsDwellers = await debitDweller.paginate({},{page, limit: 10});

        return res.json(debitsDwellers);
    },

    async show(req, res) {
        const debitDweller = await debitDweller.findById(req.params.id);

        return res.json(debitDweller);
    },

    async store(req, res) {
        const debitDweller = await debitDweller.create(req.body);

        return res.json(debitDweller);
    },

    async update(req, res) {
        const debitDweller = await debitDweller.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(debitDweller);
    },

    async destroy(req, res) {
        await debitDweller.findByIdAndRemove(req.params.id);

        return res.send();
    }
};