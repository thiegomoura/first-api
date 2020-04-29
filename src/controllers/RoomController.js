const mongoose = require('mongoose');

const Room = mongoose.model('Room');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const rooms = await Room.paginate({},{page, limit: 10});

        return res.json(rooms);
    },

    async show(req, res) {
        const room = await Room.findById(req.params.id);

        return res.json(room);
    },

    async store(req, res) {
        const room = await Room.create(req.body);

        return res.json(room);
    },

    async update(req, res) {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(room);
    },

    async destroy(req, res) {
        await Room.findByIdAndRemove(req.params.id);

        return res.send();
    }
};