const Favorites = require('../models/favoriteModels')
    // controller banner 
const favoriteCtrl = {
    savefavoritePro: async(req, res) => {
        try {
            const { idCategory_product, nameProduct,nameCategoryProduct, color, price, image, size, iduser } = req.body;

            const IdCategory_product = await Favorites.findOne({ $and: [{ idCategory_product }, { iduser }] })
            if (IdCategory_product) return res.status(400).json({ msg: "Products already exists." })

            const newfavorite = new Favorites({
                    idCategory_product,
                    nameProduct,
                    nameCategoryProduct,
                    color,
                    price,
                    image,
                    size,
                    iduser
                })
                // Save mongodb
            await newfavorite.save()

            res.json(newfavorite)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deletefavoritePro: async(req, res) => {
        try {
            await Favorites.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted a Product" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getallProductsFavorite: async(req, res) => {
        try {
            const favoritePro = await Favorites.find().lean().sort({ createdAt: -1 })
            res.json(favoritePro)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = favoriteCtrl