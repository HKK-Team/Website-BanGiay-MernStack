const express = require('express');
const mailSevice = require('./../class/MailSevice.js')
const _mailSevice = new mailSevice();

const router = express.Router();
router.put('/ForgotPassword/:id',_mailSevice.sendMailContext)
export default router;