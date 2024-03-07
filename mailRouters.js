const express = require("express");
const { sendMail,getBill } = require("../controllers/mailController");
const router=express.Router();

router.route("/user/sendMail").post(sendMail);
router.route("/product/getbill").post(getBill);

module.exports = router;