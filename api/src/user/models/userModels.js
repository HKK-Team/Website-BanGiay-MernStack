const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
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
    username : {
        type : String,
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
    },
    role: {
        type: Number,
        default: 0
    },
},
{
    timestamps: true
});
module.exports = mongoose.model('Users',userSchema);