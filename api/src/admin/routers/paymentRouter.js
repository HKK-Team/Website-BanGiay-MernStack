const router = require('express').Router()
const paymentCtrl = require('../controllers/paymentController')

router.route('/deletePayment/:id')
    .delete(paymentCtrl.deletePayment)
router.route('/OrderBrowsing')
    .get(paymentCtrl.getOrderBrowsing)
router.route('/editOrderBrowsing')
    .post(paymentCtrl.updateOrderBrowsing)
module.exports = router