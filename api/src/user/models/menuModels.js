const mongoose = require('mongoose')
    //models menu
const menu1Schema = new mongoose.Schema({
    text: String,
    slug: String,
    category: String,
    stt: Number
})

module.exports = mongoose.model('Menu1s', menu1Schema)