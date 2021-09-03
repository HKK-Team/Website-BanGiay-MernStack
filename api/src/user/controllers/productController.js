const Products = require('../models/productModels')
     //controller products
const productCtrl = {           // $eq là biểu thức so sánh trong mongodb (truy vấn có điều kiện)
    getproduct_boy: async(req, res) => { // tạo điểu khiển để hiển thị dữ liệu lên localhost
        try {
            const product_boy = await Products.find({ nameCategoryProduct: { $eq: "Hunter Nam" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_boy)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_girl: async(req, res) => {
        try {
            const product_girl = await Products.find({ nameCategoryProduct: { $eq: "Hunter Nữ" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_girl)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_pk: async(req, res) => {
        try {
            const product_pk = await Products.find({ nameCategoryProduct: { $eq: "Phụ Kiện" } }).lean().sort({ dateCreate: 'desc' })

            res.json(product_pk)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_gosto: async(req, res) => {
        try {
            const product_gosto = await Products.find({ nameCategoryProduct: { $eq: "Gosto" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_gosto)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_betrai: async(req, res) => {
        try {
            const product_betrai = await Products.find({ nameCategoryProduct: { $eq: "Bé Nam" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_betrai)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_begai: async(req, res) => {
        try {
            const product_begai = await Products.find({ nameCategoryProduct: { $eq: "Bé Nữ" } }).lean().sort({ dateCreate: 'desc' })
            res.json(product_begai)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct: async(req, res) => {
        try {
            const product = await Products.find()
            res.json(product)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}
module.exports = productCtrl