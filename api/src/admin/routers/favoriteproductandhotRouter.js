const router = require('express').Router()
const favoriteproductandhotCtrl = require('../controllers/favoriteproductandhotController')

    router.route('/revenueproducthot')
    .get(favoriteproductandhotCtrl.getdatahot)

    router.route('/revenueproductfav')
    .get(favoriteproductandhotCtrl.getdatafav)


module.exports = router