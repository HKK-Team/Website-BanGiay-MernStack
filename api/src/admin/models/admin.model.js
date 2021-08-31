const { ObjectId } = require('bson');
const mongoose = require('mongoose');

// tạo model tương ứng với tưng collection để lưu trữ dữ liệu
var adminSchema = new mongoose.Schema({
    id : {
        type : ObjectId
    },
    userName : {
        type : String
    },
    passWord : {
        type : String
    },
    email : {
        type : String
    },
    fullName : {
        type : String
    }
});
mongoose.model('Admin',adminSchema);