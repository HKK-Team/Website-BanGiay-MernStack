const router = require("express").Router();
const MailSeviceController = require("../controllers/MailSeviceController.js");

router.route("/:email/otpCode").put(MailSeviceController.sendMailOtpcode);
router.route("/:email/context").put(MailSeviceController.sendMailContext);
router.route("/OrderStatus").put(MailSeviceController.sendMailOrderStatust);
router.route("/:otp/confrimOtp").post(MailSeviceController.conFirmOtpCode);
router.route("/editPassword").put(MailSeviceController.editPassword);
router.route("/:email/conFirmEmail").post(MailSeviceController.conFirmEmail);


module.exports = router;
