const router = require('express').Router()
const chartCtrl = require('../controllers/chartAdmin')

router.route('/chart')
    .get(chartCtrl.getdata)

module.exports = router