const mongoose = require('mongoose')
    //models favorite
const favorites = new mongoose.Schema({
    idCategory_product: {
        type: String,
    },
    nameProduct: {
        type: String,
    },
    nameCategoryProduct: {
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
module.exports = mongoose.model('Favorites', favorites)