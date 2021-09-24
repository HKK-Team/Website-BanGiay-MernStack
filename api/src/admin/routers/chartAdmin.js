const router = require('express').Router()
const chartCtrl = require('../controllers/chartAdminController')

router.route('/chart')
    .get(chartCtrl.getdata)

    router.route('/chartbyyear')
    .get(chartCtrl.getdatabyyear)

    router.route('/chartbyqui')
    .get(chartCtrl.getdatabyqui)

    router.route('/chartbyproducthot')
    .get(chartCtrl.getdatabyproducthot)

    router.route('/chartbyproducthotquy1')
    .get(chartCtrl.getdatabyproducthotquy1)

    router.route('/chartbyproducthotquy2')
    .get(chartCtrl.getdatabyproducthotquy2)

    router.route('/chartbyproducthotquy3')
    .get(chartCtrl.getdatabyproducthotquy3)

    router.route('/chartbyproducthotquy4')
    .get(chartCtrl.getdatabyproducthotquy4)

    router.route('/chartbycountuser')
    .get(chartCtrl.getdatacountuser)


module.exports = router