const express = require("express");
const admin = require("../../controllers/admin");

const router = express.Router();

router.post("/addEmployee", admin.addEmployee);
router.post("/deleteEmployee", admin.deleteEmployee);

module.exports = router;
