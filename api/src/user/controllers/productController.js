const Products = require('../models/productModels')

class ApiFeatures {
    constructor(query, queryString) {
            this.query = query;
            this.queryString = queryString;
        }
        //filtering product
    filtering() {
            const queryObj = {...this.queryString } //queryString = req.query

            const excludedFields = ['page', 'sort', 'limit']
            excludedFields.forEach(el => delete(queryObj[el]))

            let queryStr = JSON.stringify(queryObj)
            queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex|eq)\b/g, match => '$' + match)
            this.query.find(JSON.parse(queryStr))

            return this;
        }
        //sorting product
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-dateCreate')
        }
        return this;
    }
}
//controller products
const productCtrl = { // $eq là biểu thức so sánh trong mongodb (truy vấn có điều kiện)
    getproduct: async(req, res) => {
        try {
            const product = await Products.find()
            res.json(product)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    // return all product
    getProducts: async(req, res) => {
        try {
            const features = new ApiFeatures(Products.find(), req.query)
                .filtering()

            const products = await features.query

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_boy: async(req, res) => {
        try {
            const features = new ApiFeatures(Products.find({ nameCategoryProduct: { $eq: "Hunter Nam" } })
                .lean().sort({ dateCreate: 'desc' }), req.query).filtering().sort()
            const product_boy = await features.query
            res.json(product_boy)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_girl: async(req, res) => {
        try {
            const features = new ApiFeatures(Products.find({ nameCategoryProduct: { $eq: "Hunter Nữ" } })
                .lean().sort({ dateCreate: 'desc' }), req.query).filtering().sort()
            const product_girl = await features.query
            res.json(product_girl)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_pk: async(req, res) => {
        try {
            const features = new ApiFeatures(Products.find({ nameCategoryProduct: { $eq: "Phụ Kiện" } })
                .lean().sort({ dateCreate: 'desc' }), req.query).filtering().sort()
            const product_pk = await features.query


            res.json(product_pk)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_gosto: async(req, res) => {
        try {
            const features = new ApiFeatures(Products.find({ nameCategoryProduct: { $eq: "Gosto" } })
                .lean().sort({ dateCreate: 'desc' }), req.query).filtering().sort()
            const product_gosto = await features.query

            res.json(product_gosto)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_betrai: async(req, res) => {
        try {
            const features = new ApiFeatures(Products.find({ nameCategoryProduct: { $eq: "Bé Nam" } })
                .lean().sort({ dateCreate: 'desc' }), req.query).filtering().sort()
            const product_betrai = await features.query
            res.json(product_betrai)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getproduct_begai: async(req, res) => {
        try {
            const features = new ApiFeatures(Products.find({ nameCategoryProduct: { $eq: "Bé Nữ" } })
                .lean().sort({ dateCreate: 'desc' }), req.query).filtering().sort()
            const product_begai = await features.query
            res.json(product_begai)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getallproduct: async(req, res) => {
        try {
            const features = new ApiFeatures(Products.find(), req.query)
                .filtering()
            const products = await features.query
            res.json(products)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getmaxprice: async(req, res) => {
        try {
            const getmaxprice = await Products.findOne().lean().sort({ price: -1 }).limit(1)
            res.json(getmaxprice)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = productCtrl