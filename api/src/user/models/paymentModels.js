const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema({
    user_id :{
        type : String,
        required : true
    },
    product_id : {
        type :String,
        required : true
    },
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    quantity :{
        type : Number,
        required : true
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