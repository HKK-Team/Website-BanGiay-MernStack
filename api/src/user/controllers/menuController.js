const Menus = require('../models/menuModels')
    //controller menu
const menuCtrl = {
    getmenu1: async(req, res) => {
        try {
            const menus = await Menus.find({ category: { $eq: "menu1" } }).lean()
            res.json(menus)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getmenu2: async(req, res) => {
        try {
            const menus = await Menus.find({ category: { $eq: "menu2" } }).lean()
            res.json(menus)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}
module.exports = menuCtrl