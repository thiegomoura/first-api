const mongoose = require('mongoose');

const Debit = mongoose.model('Debit');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const debits = await Debit.paginate({},{page, limit: 10});

        return res.json(debits);
    },

    async show(req, res) {
        const debit = await Debit.findById(req.params.id);

        return res.json(debit);
    },

    async store(req, res) {
        const debit = await Debit.create(req.body);

        return res.json(debit);
    },

    async update(req, res) {
        const debit = await Debit.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(debit);
    },

    async destroy(req, res) {
        await Debit.findByIdAndRemove(req.params.id);

        return res.send();
    }
};