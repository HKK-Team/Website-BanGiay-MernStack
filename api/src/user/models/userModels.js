const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
    email : {
        type :String,
        unique : true,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    phonenumber : {
        type : String,
    },
    address : {
        type : String,
    },
    nationality : {
        type :String,
    },
    bornday : { 
        type: Date, 
        default: Date.now 
    },
    password : {
        type :String,
        required : true
    }
});
module.exports = mongoose.model('Users',userSchema);