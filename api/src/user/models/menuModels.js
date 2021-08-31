const mongoose = require('mongoose')
    //models menu
const menuSchema = new mongoose.Schema({
    text: String,
    slug: String,
    category: String,
    dateCreate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Menus', menuSchema)