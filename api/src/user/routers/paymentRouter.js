const router = require('express').Router()
const paymentCtrl = require('../controllers/paymentController')
router.route('/payment')
    .get(paymentCtrl.getPayment)
router.route('/creat_payment')
    .post(paymentCtrl.creatPayment)
router.route('/CancelOder')
    .post(paymentCtrl.cancelOrders)
module.exports = router