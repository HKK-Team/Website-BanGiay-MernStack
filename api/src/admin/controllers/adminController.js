const express = require('express');
var router = express.Router();
require('../models/db');
router.get('/',(req,res) => {
    res.json('show');
});
module.exports = router;