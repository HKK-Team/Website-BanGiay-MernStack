const router = require('express').Router()
const userCtrl = require('../controllers/userController')

router.route('/CreatUser')
    .post(userCtrl.CreatUser)
router.route('/editUser')
    .post(userCtrl.editUser)
router.route('/deleteUser/:id')
    .delete(userCtrl.deleteUser)
module.exports = router