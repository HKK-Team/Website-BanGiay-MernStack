const router = require('express').Router()
const widgetCtrl = require('../controllers/widgetController')

    router.route('/widget')
    .get(widgetCtrl.getdata)

    router.route('/widgetbyyear')
    .get(widgetCtrl.getdatabyyear)


module.exports = router