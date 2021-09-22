const router = require('express').Router()
const chartCtrl = require('../controllers/chartAdminController')

router.route('/chart')
    .get(chartCtrl.getdata)

    router.route('/chartall')
    .get(chartCtrl.getdataall)

    router.route('/chartbyyear')
    .get(chartCtrl.getdatabyyear)

    router.route('/chartbyqui')
    .get(chartCtrl.getdatabyqui)

module.exports = router