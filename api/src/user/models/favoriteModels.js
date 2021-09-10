const mongoose = require('mongoose')
    //models favorite
const product_favorites = new mongoose.Schema({
    idCategory_product: {
        type: String,
        required: true,
        unique: true
    },
    nameProduct: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
    },
    size: {
        type: Number,
        default: 0
    },
    iduser: {
        type: String,
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Product_favorites', product_favorites)