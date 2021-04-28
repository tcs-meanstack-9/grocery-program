const express = require("express");
const admin = require("../../controllers/admin");

const router = express.Router();
const { isEmail, hasPassword, hasfistName, hasLastName} = require("../../middlewares/validator")

router.post("/addEmployee", [isEmail, hasPassword, hasfistName, hasLastName], admin.addEmployee);
router.post("/deleteEmployee", admin.deleteEmployee);

module.exports = router;
