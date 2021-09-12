const router = require('express').Router()
const cartsCtrl = require('../controllers/cartsController')
    //router carts
router.route('/cart')
    .get(cartsCtrl.getallProductsCarts)


module.exports = router