const mongoose = require('mongoose')
    //models products
const productSchema = new mongoose.Schema({
    idCategory_product: String,
    nameProduct: String,
    color: String,
    size: {
        size1: Number,
        size2: Number,
        size3: Number,
        size4: Number,
        size5: Number
    },
    nameCategoryProduct: String,
    dateCreate: { type: Date, default: Date.now },
    codeHot: {
        type : Boolean,
        default : false
    },
    codeSale: {
        type : Boolean,
        default : false
    },
    price: Number,
    codeNew: Boolean,
    detailImages: {
        images1: String,
        images2: String,
        images3: String,
        images4: String,
        images5: String
    },
    slug: String,
    image: String,
    detailCategory: String
})

module.exports = mongoose.model('Products', productSchema)