const Banners = require('../models/bannerModels')
    // controller banner 
const bannerCtrl = {
    getbanner_main: async(req, res) => {
        try {
            const banners = await Banners.find({ category: { $eq: "banner_main" } }).lean().sort({ dataCreate: 'desc' })
            res.json(banners)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getbanner: async(req, res) => {
        try {
            const banners = await Banners.find({ category: { $eq: "banner" } }).lean().sort({ dataCreate: 'desc' })
            res.json(banners)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getbanner_boy: async(req, res) => {
        try {
            const banners = await Banners.find({ category: { $eq: "banner_boy" } }).lean().sort({ dataCreate: 'desc' })
            res.json(banners)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getbanner_girl: async(req, res) => {
        try {
            const banners = await Banners.find({ category: { $eq: "banner_girl" } }).lean().sort({ dataCreate: 'desc' })
            res.json(banners)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}
module.exports = bannerCtrl