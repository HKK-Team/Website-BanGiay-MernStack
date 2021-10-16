const router = require("express").Router();
const MailSeviceController = require("../controllers/MailSeviceController.js");

router.route("/:email/otpCode").put(MailSeviceController.sendMailOtpcode);
router.route("/:email/context").post(MailSeviceController.sendMailContext);
router.route("/:otp/confrimOtp").post(MailSeviceController.conFirmOtpCode);
router.route("/editPassword").put(MailSeviceController.editPassword);
router.route("/:email/conFirmEmail").post(MailSeviceController.conFirmEmail);


module.exports = router;
