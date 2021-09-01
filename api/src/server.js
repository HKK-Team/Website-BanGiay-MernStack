require('./admin/models/db');
const express = require('express');
const port = 3300;
const app = express();

const adminController = require('./admin/controllers/adminController'); 

app.listen(port, () =>{
  console.log("Connected! localhost:" +port);
});
app.use('/admin',adminController);  // đường dẫn trên localhost