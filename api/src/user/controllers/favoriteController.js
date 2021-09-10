const Product_favorites = require('../models/favoriteModels')
    // controller banner 
const favoriteCtrl = {
    savefavoritePro: async(req, res) => {
        try {
            const { idCategory_product, nameProduct, color, price, image, size, iduser } = req.body;

            const IdCategory_product = await Product_favorites.findOne({ idCategory_product })
            if (IdCategory_product) return res.status(400).json({ msg: "Products already exists." })

            const newfavorite = new Product_favorites({
                    idCategory_product,
                    nameProduct,
                    color,
                    price,
                    image,
                    size,
                    iduser
                })
                // Save mongodb
            await newfavorite.save()

            res.json({ msg: "luu" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deletefavoritePro: async(req, res) => {
        try {
            await Product_favorites.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted a Product" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getallProductsFavorite: async(req, res) => {
        try {
            const favoritePro = await Product_favorites.find().lean().sort({ createdAt: -1 })
            res.json(favoritePro)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = favoriteCtrl