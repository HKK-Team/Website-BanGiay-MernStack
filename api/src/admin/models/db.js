var mongoose = require("mongoose");
var url =
  "mongodb+srv://minhkhanh:020901@cluster0.zuhc5.mongodb.net/WebsiteBanGiay?retryWrites=true&w=majority";

mongoose.connect(url, (err) => {
  if (!err) {
    console.log("Connected Mongodb Successfully!");
  } else {
    console.log("Error in DB Connection : " + err);
  }
});
require("./admin.model");
