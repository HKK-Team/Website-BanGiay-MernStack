const router = require("express").Router();
const MailSeviceController = require("../controllers/MailSeviceController.js");

router.route("/:email/otpCode").post(MailSeviceController.sendMailOtpcode);
router.route("/:email/context").post(MailSeviceController.sendMailContext);
router.route("/:otp/confrimOtp").post(MailSeviceController.conFirmOtpCode);


module.exports = router;
