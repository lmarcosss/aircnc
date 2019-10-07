const { User } = require('../models')

//index, show, store, update, destroy

//getAll, getId, post, put, delete

module.exports = {
    async create(req, res) {
        const { email } = req.body

        const user = await User.create({ email })

        return res.json(user)
    }
}