const router = require('express').Router()
const paymentCtrl = require('../controllers/paymentController')

router.route('/deletePayment/:id')
    .delete(paymentCtrl.deletePayment)
module.exports = router