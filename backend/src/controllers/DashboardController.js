const { Spot } = require('../models')

//index, show, store, update, destroy

//getAll, getId, post, put, delete

module.exports = {
    async get(req, res) {
        const { user_id } = req.headers

        const spots = await Spot.find({ user: user_id })

        return res.json(spots)
    }
}