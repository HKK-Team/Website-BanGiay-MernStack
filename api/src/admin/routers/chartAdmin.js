const router = require('express').Router()
const chartCtrl = require('../controllers/chartAdminController')

router.route('/chart')
    .get(chartCtrl.getdata)

    router.route('/chartall')
    .get(chartCtrl.getdataall)

module.exports = router