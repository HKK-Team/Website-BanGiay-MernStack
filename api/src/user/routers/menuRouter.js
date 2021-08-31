const router = require('express').Router()
const menuCtrl = require('../controllers/menuController')
    //router api menu
router.route('/menu1')
    .get(menuCtrl.getmenu1)

router.route('/menu2')
    .get(menuCtrl.getmenu2)

module.exports = router