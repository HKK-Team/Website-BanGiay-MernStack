const router = require('express').Router()
const chartCtrl = require('../controllers/chartAdminController')

router.route('/chart')
    .get(chartCtrl.getdata)

module.exports = router