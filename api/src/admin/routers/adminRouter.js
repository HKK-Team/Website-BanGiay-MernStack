const router = require('express').Router()
const adminCtrl = require('../controllers/adminController')
const auth = require('../middleware/auth')

router.route('/login')
    .post(adminCtrl.login)
router.get('/refresh_token',adminCtrl.refreshToken)
router.route('/infor')
    .get( auth, adminCtrl.getAdmin)
router.route('/logout')
    .get(adminCtrl.logout)
router.route('/admin')
    .get(adminCtrl.getAdmins)
module.exports = router