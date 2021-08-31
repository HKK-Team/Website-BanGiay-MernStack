const router = require('express').Router()
const bannerCtrl = require('../controllers/bannerController')
    //router api banner
router.route('/banner_main')
    .get(bannerCtrl.getbanner_main)

router.route('/banner')
    .get(bannerCtrl.getbanner)

router.route('/banner_boy')
    .get(bannerCtrl.getbanner_boy)

router.route('/banner_girl')
    .get(bannerCtrl.getbanner_girl)

module.exports = router