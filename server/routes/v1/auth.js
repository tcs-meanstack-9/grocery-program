const express = require("express");
const auth = require("../../controllers/auth");
const passportJWT = require("../../middlewares/passportJWT")();
const router = express.Router();
const { isEmail, hasPassword, hasfistName, hasLastName} = require("../../middlewares/validator")

router.post("/signin", auth.signin);
router.post("/signup", [isEmail, hasPassword, hasfistName, hasLastName], auth.signup);
//router.get("/me", passportJWT.authenticate(), auth.me);

module.exports = router;