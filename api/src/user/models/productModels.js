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
    codeHot: Boolean,
    codeSale: Boolean,
    price: Number,
    codeNew: Boolean,
    detailImages: {
        image1: String,
        image2: String,
        image3: String,
        image4: String,
        image5: String
    },
    slug: String,
    image: String
})

module.exports = mongoose.model('Products', productSchema)