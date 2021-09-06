const router = require('express').Router()
const userCtrl = require('../controllers/userController')
const auth = require('../middleware/auth')

router.route('/login')
    .post(userCtrl.login)
router.route('/register')
    .post(userCtrl.register)
module.exports = router