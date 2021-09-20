const mongoose = require('mongoose');

// tạo model tương ứng với tưng collection để lưu trữ dữ liệu
const adminSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    fullname : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
});
module.exports = mongoose.model('Admins',adminSchema);