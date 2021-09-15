const router = require('express').Router()
const auth = require('../middleware/auth')
const paymentCtrl = require('../controllers/paymentController')
router.route('/payment')
    .get(paymentCtrl.getPayment)
router.route('/creat_payment')
    .post(auth,paymentCtrl.creatPayment)
module.exports = router