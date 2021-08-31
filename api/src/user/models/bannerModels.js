const mongoose = require('mongoose')
    //menu banner
const bannerSchema = new mongoose.Schema({
    images: {
        image1: String,
        image2: String,
        image3: String,
        image4: String,
        image5: String,
        image6: String,
        image7: String
    },
    slug: String,
    category: String,
    dateCreate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Banners', bannerSchema)