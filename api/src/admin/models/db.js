var mongoose = require('mongoose');
var url = "mongodb+srv://khanhzu:mARUjKuNSVoTJziV@newcluster.klghj.mongodb.net/online_shop_project?retryWrites=true&w=majority";

mongoose.connect(url,(err) =>{
    if(!err){
        console.log("Connected Mongodb Successfully!");
    }
    else{
        console.log("Error in DB Connection : " + err);
    }
});
require('./admin.model');