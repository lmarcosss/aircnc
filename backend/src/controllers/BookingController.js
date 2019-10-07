const { Booking } = require('../models')

module.exports = {
    async create(req, res) {
        const { user_id } = req.headers
        const { spot_id } = req.params
        const { date } = req.body

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        })


        return res.json(booking)
    }
}