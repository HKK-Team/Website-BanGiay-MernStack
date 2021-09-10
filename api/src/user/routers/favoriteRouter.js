const router = require('express').Router()
const favoriteCtrl = require('../controllers/favoriteController')
const auth = require('../middleware/auth')
    //router favorite
router.route('/favorite')
    .post(favoriteCtrl.savefavoritePro)

// router.route('/favorite')
//     .get(favoriteCtrl.getfavoritePro)

router.route('/favorite/:id')
    .delete(favoriteCtrl.deletefavoritePro)

router.route('/favorite')
    .get(favoriteCtrl.getallProductsFavorite)


module.exports = router