const router = require('express').Router()
const productCtrl = require('../controllers/productController')
    //router api products
router.route('/products_boy')
    .get(productCtrl.getproduct_boy)

router.route('/products_girl')
    .get(productCtrl.getproduct_girl)

router.route('/products_pk')
    .get(productCtrl.getproduct_pk)

router.route('/products_gosto')
    .get(productCtrl.getproduct_gosto)

router.route('/products_betrai')
    .get(productCtrl.getproduct_betrai)

router.route('/products_begai')
    .get(productCtrl.getproduct_begai)

router.route('/products')
    .get(productCtrl.getallproduct)

module.exports = router