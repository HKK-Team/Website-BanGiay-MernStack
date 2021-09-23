const router = require('express').Router()
const productCtrl = require('../controllers/productController')

router.route('/deleteProduct/:id')
    .delete(productCtrl.deleteProduct)
router.route('/editProduct')
    .post(productCtrl.updateProduct)
router.route('/Create_Product')
    .post(productCtrl.createProduct)
module.exports = router