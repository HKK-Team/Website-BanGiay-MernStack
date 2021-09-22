const router = require('express').Router()
const productCtrl = require('../controllers/productController')

router.route('/deleteProduct/:id')
    .delete(productCtrl.deleteProduct)
module.exports = router