const Carts = require('../models/cartsModels')

const cartsCtrl = {
    getallProductsCarts: async(req, res) => {
        try {
            const favoritePro = await Carts.find().lean().sort({ createdAt: -1 })
            res.json(favoritePro)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = cartsCtrl