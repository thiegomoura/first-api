const mongoose = require('mongoose');

const Dweller = mongoose.model('Dweller');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const dwellers = await Dweller.paginate({},{page, limit: 10});

        return res.json(dwellers);
    },

    async show(req, res) {
        const dweller = await Dweller.findById(req.params.id);

        return res.json(dweller);
    },

    async store(req, res) {
        const dweller = await Dweller.create(req.body);

        return res.json(dweller);
    },

    async update(req, res) {
        const dweller = await Dweller.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(dweller);
    },

    async destroy(req, res) {
        await Dweller.findByIdAndRemove(req.params.id);

        return res.send();
    }
};