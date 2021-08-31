const Products = require('../models/productModels')
    // //controller products
const productCtrl = {
    getproduct_boy: async(req, res) => {
        try {
            const product_boy = await Products.find({ nameCategoryProduct: { $eq: "Hunter Nam" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_boy)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_girl: async(req, res) => {
        try {
            const product_girl = await Products.find({ nameCategoryProduct: { $eq: "giaynu" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_girl)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_pk: async(req, res) => {
        try {
            const product_pk = await Products.find({ nameCategoryProduct: { $eq: "phukien" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_pk)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_gosto: async(req, res) => {
        try {
            const product_gosto = await Products.find({ nameCategoryProduct: { $eq: "giaygosto" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_gosto)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_betrai: async(req, res) => {
        try {
            const product_betrai = await Products.find({ nameCategoryProduct: { $eq: "giaybetrai" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_betrai)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_begai: async(req, res) => {
        try {
            const product_begai = await Products.find({ nameCategoryProduct: { $eq: "giaybegai" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_begai)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}
module.exports = productCtrl