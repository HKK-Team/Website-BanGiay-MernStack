const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema({
    user_id :{
        type : String,
    },
    paymentID:{
        type: String,
    },
    fullName : {
        type : String,
    },
    email : {
        type : String,
    },
    phone_number :{
        type : String,
    },
    address : {
        type : String,
    },
    cart:{
        type: Array,
        default: []
    },
    total_price : {
        type : Number,
    },
    orderDate : {
        type: Date, 
        default: Date.now 
    },
    status:{
        type: Boolean,
        default: false
    }    
}, 
{
    timestamps: true
})
module.exports = mongoose.model("Payments", paymentSchema)